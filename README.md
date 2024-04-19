# API Integration - KILN

I believe the purpose to integrate with KILN is for staking, and in my experience we have to use fireblocks as Liquidity Provider (where our fund placed). Currently fireblocks console has Staking Page that make easier for us, but with limited protocols, if we want to stake our crypto assets. We can choose either Figment or KILN, on this case we choose KILN.

So there are 2 soutions if we want to stake our crypto assets:
1. Stake on chain per user to staking provider
2. Stake on chain per organization to staking provider

All the thing above from my experience, please guide me if i am wrong :)

## Pros
1. Clear explanation
2. Clear validation before request to KILN
3. Easy to use

## Requirements
- Node 18 or above

## Installations

1. Clone the repository
```bash
via ssh: git clone git@github.com:reviart/api-integration-kiln.git
via https: git clone https://github.com/reviart/api-integration-kiln.git
```
2. Move to project
```bash
cd api-integration-kiln
```
3. Install dependencies
```bash
yarn install
```
4. Set up your .env file, just copying the defaults from .env.example to .env then fill all the variable
```bash
cp .env.example .env
nano .env
```
5. Run the server on Local
```bash
yarn run dev
```
