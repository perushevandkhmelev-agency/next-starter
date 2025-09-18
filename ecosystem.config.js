module.exports = {
  apps: [
    {
      name: 'project-frontend',
      script: './node_modules/.bin/next',
      args: 'start',
      instances: 2,
      exec_mode: 'cluster_mode',
      env: {
        NODE_ENV: 'production',
        PORT: 3001
      },
      env_production: {
        APP_ENV: 'production'
      }
    }
  ],
  deploy: {
    production: {
      user: 'www',
      host: 'host',
      ref: 'origin/main',
      repo: 'git@github.com:perushevandkhmelev-agency/project/project-frontend.git',
      path: '/home/www/project-frontend',
      'post-deploy':
        'UV_THREADPOOL_SIZE=100 pnpm i && NODE_ENV=production pnpm build && APP_REVISION=$(git rev-parse --short HEAD) pm2 startOrGracefulReload ecosystem.config.js --update-env --env production && pm2 save'
    }
  }
}
