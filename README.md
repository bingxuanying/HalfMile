# HalfMile Brief Introduction

Please view website: https://halfmile.io

## Summary

HalfMile is an web app helps people plan their trips and book hotel and flights altogether.

## Frontend

Built with React and Redux.

Ultilized:

1. Google Map API to locate places and also show on the map.
2. Google Vision API landmark feature to recognize the location of the given photo by users.
3. Google Cloud Function to power Vision API.

## Backend

Used AWS Fargate and docker for micro-service architecture with RESTful API implemented.

Ultilized:

1. Redis for cache
2. Nginx for load-balancing
3. DynamoDB for database 
