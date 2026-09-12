# Getting Started

Welcome to your new CAP project.

It contains these folders and files, following our recommended project layout:

File or Folder | Purpose
---------|----------
`app/` | content for UI frontends goes here
`db/` | your domain models and data go here
`srv/` | your service models and code go here
`readme.md` | this getting started guide

## Next Steps

- Open a new terminal and run `cds watch`
- (in VS Code simply choose _**Terminal** > Run Task > cds watch_)
- Start with your domain model, in a CDS file in `db/`


- cf cs hana hdi-shared FirstCapDev-db
- cds add hana
- cf cs xsuaa application FirstCapDev-auth -c xs-security.json
- cds bind --to FirstCapDev-db,FirstCapDev-auth
- router>npm i
- cds bind --exec -- npm start --prefix app/router
- cf update-service FirstCapDev-auth -c xs-security.json
- cds build
- cds deploy
- mbt build
- cf deploy


## Learn More

Learn more at <https://cap.cloud.sap>.
