### hello1 测试项目
1. 用来测试nodejs项目
2. 和coding.net结合
3. 同时熟悉git使用
4. 下一步可考虑将这个项目变成公开项目

### 注意事项
1. 安装依赖步骤
* npm install sqlite3 --build-from-source
* cnpm install knex -g
* cnpm install 

### 数据据迁移使用方案
1. knex init 生成knexfile.js，修改之
2. knex migrate:make create_user_table 会默认在migration目录下生成迁移文件
3. knex migrate:latest --env dev 会按开发配置执行迁移
4. knex seed:make insert_user_data --env dev 默认在seeds目录下生成测试数据文件
5. knex seed:run --env dev  执行种子文件
6. npm test  启动功能测试

### 测试用例的debug方式
1. npm run test_debug
2. vscode debug模式选择attach, F5

### TODO事项
1. 完善日志方案
2. 完善环境切换方案(主要是配置文件分离)
3. 熟悉knex之migration相关的api,用来做自动化功能测试