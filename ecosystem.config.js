module.exports = {
    apps: [
{
name: "HarvardCESNuxt",
port: '3000',
exec_mode: 'cluster',
instance: 'max',
script: './.output/server/index.mjs'
        }
    ]
}