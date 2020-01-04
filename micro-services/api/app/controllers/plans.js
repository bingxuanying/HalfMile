'use strict';

require('module-alias/register');
require('dotenv').config({ path: './.env' });

const uuidv1 = require('uuid/v1');
const { UserError } = require('@app/utils/errors');
const { tableUsers } = require('@app/services/dynamodb');

const createPlan = async (ctx, next) => {
  const body = ctx.request.body;
  body.uuid = uuidv1();
  const params = {
    TableName: process.env.TABLE_USERS,
    Key: { email: ctx.user.email },
    UpdateExpression: 'SET #plans = list_append(if_not_exists(#plans, :empty_list), :plan)',
    ExpressionAttributeNames: {
      '#plans': 'plans',
    },
    ExpressionAttributeValues: {
      ':plan': [ body ],
      ':empty_list': [],
    },
    ReturnValues: 'UPDATED_NEW',
  };
  ctx.body = await tableUsers.update(params);
  ctx.status = 200;
  await next();
};

const getPlans = async (ctx, next) => {
  const data = await tableUsers.get(ctx.user.email);
  ctx.body = data.plans || [];
  ctx.status = 200;
  await next();
};

const getPlan = async (ctx, next) => {
  const planId = ctx.params.planId;
  const data = await tableUsers.get(ctx.user.email);
  const plan = data.plans.find(e => e.uuid === planId);
  if (!plan) throw new UserError('item not exists', 400);
  ctx.body = plan;
  ctx.status = 200;
  await next();
};

const updatePlan = async (ctx, next) => {
  const planId = ctx.params.planId;
  const newPlan = ctx.request.body;
  newPlan.uuid = planId;
  const data = await tableUsers.get(ctx.user.email);
  const idx = data.plans.findIndex(e => e.uuid === planId);
  if (idx === -1) throw new UserError('item not exists', 400);
  data.plans[idx] = newPlan;
  const params = {
    TableName: process.env.TABLE_USERS,
    Key: { email: ctx.user.email },
    UpdateExpression: 'SET plans = :plans',
    ExpressionAttributeValues: {
      ':plans': data.plans,
    },
    ReturnValues: 'UPDATED_NEW',
  };
  ctx.body = await tableUsers.update(params);
  ctx.status = 200;
  await next();
};

const deletePlan = async (ctx, next) => {
  const planId = ctx.params.planId;
  const data = await tableUsers.get(ctx.user.email);
  const idx = data.plans.findIndex(e => e.uuid === planId);
  if (idx === -1) throw new UserError('item not exists', 400);
  delete data.plans[idx];
  const params = {
    TableName: process.env.TABLE_USERS,
    Key: { email: ctx.user.email },
    UpdateExpression: 'SET plans = :plans',
    ExpressionAttributeValues: {
      ':plans': data.plans,
    },
    ReturnValues: 'UPDATED_NEW',
  };
  ctx.body = await tableUsers.update(params);
  ctx.status = 200;
  await next();
};

module.exports = { createPlan, getPlan, updatePlan, deletePlan, getPlans };
