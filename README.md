## 安装依赖
```
npm install
```

## 打包
```
npm run build
```

## 运行
```
npm run dev
```

## eslint检测
```
npm run lint
```
# git提交
## Header
>Header部分包括三个字段type（必需）、scope（可选）和subject（必需）。
```
<type>(<scope>): <subject>
```
## type
>type用于说明 commit 的提交性质。

|值|描述|
|--|--|
feat|	新增一个功能
fix	|修复一个Bug
docs|	文档变更
style|	代码格式（不影响功能，例如空格、分号等格式修正）
refactor|	代码重构
perf|	改善性能
test|	测试
build|	变更项目构建或外部依赖（例如scopes: webpack、gulp、npm等）
ci|	更改持续集成软件的配置文件和package中的scripts命令，例如scopes: Travis, Circle等
chore|	变更构建流程或辅助工具
revert|	代码回退
