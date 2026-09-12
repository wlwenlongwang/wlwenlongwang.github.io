# wlwenlongwang.github.io

王文龙（Wenlong Wang）的个人 GitHub 主页，基于纯 HTML / CSS / JS 构建，无任何构建依赖。

## 本地预览

直接用浏览器打开 `index.html`，或在本目录运行：

```bash
python3 -m http.server 8000
```

然后访问 <http://localhost:8000>。

## 部署到 GitHub Pages

1. 在 GitHub 上创建一个**公开仓库**，仓库名必须与用户名完全一致：`wlwenlongwang.github.io`
2. 在本目录执行：

```bash
git init
git add .
git commit -m "feat: init personal homepage"
git branch -M main
git remote add origin git@github.com:wlwenlongwang/wlwenlongwang.github.io.git
git push -u origin main
```

3. 等待 1–2 分钟，访问 <https://wlwenlongwang.github.io> 即可。

## 隐私说明（重要）

本页**仅收录可公开分享的信息**，以下敏感字段均已刻意剔除，请勿在后续修改中加入：

- 身份证号、出生日期 / 年龄
- 手机号、紧急联系人及其电话
- 家庭成员信息、详细家庭住址（仅保留城市级别"南京"）
- 籍贯 / 户籍地 / 高中信息
- 政治面貌、民族、婚姻状况、健康信息
- 实习单位的联系人姓名与电话

若不希望公开邮箱，可搜索并删除 `index.html` 中的 `wlwenlongwang@qq.com`（两处）。

## 后续更新

编辑 `index.html` 中对应区块，保存后 push 即可，页面会自动重新发布。
