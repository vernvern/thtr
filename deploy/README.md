# ansible

## Server init

- 本地安装ansible

- 服务器安装openssh-server，开启服务

- 服务器添加ssh key(本地执行 `sh-copy-id user@192.168.0.0.1`)



## 使用

### 本地

> 首次使用，需要:
> 1. 将宿主机代码仓连接到虚拟机 /opt/src/thtr
> 2. 把 deploy/vars/hosts 文件中的 `local_server` 值改成本地服务器的ip

命令: ansible-playbook deploy_project.yml -e mode=local

### 生产环境

命令: ansible-playbook deploy_project.yml -e mode=production -e code_tag=master


## 参数


- **mode** - 选择服务器
    - local - 本地服务器
    - production - 生产环境服务器
- **code_tag** - 代码版本
    - tags
    - branch
