# Ansible

## Installation
#### Linux
Follow the installation guidelines from the
[official docs](http://docs.ansible.com/ansible/latest/intro_installation.html)
from Ansible.
 
#### MacOS
Follow the installation guidelines from the
[MacOS official docs](http://docs.ansible.com/ansible/latest/intro_installation.html)
from Ansible.
  
#### Windows
Since Windows is not supported by Ansible, create a Linux environment:
 
* Install `Windows Subsystem for Linux`;
* Install `Ubuntu` from the Windows 10 App Store;
* Open the shell for the linux environment;
```
> bash
```

* Install `Python` and its package manager `pip`
```
$ sudo apt-get -y install python-pip python-dev libffi-dev libssl-dev
``` 
* Install `Ansible` through pip.
```
$ pip install ansible --user
```
* Add `~/.local/bin` to $PATH.
```
$ echo 'PATH=$HOME/.local/bin:$PATH' >> ~/.bashrc
```
* Enjoy!

___Note:__ For troubleshooting, refer to the [source](https://www.jeffgeerling.com/blog/2017/using-ansible-through-windows-10s-subsystem-linux) of this method._

## Deployment Prerequisites
### Deployer machine
Deployer machines need to meet the following prerequisites
- Any non-windows shell
- `python`
- `ansible`

Additionally assumed is that there is a private key present named `spider_wtf_connect_key`,
that has access to all managed nodes.

### Managed nodes
Nodes that are managed by Ansible need to at least meet the following prerequisites
- Any ssh server (allowing access to configured deployment key)
- `python`, `libselinux-python`

## Playbook Requirements
Install any required ansible-packages 
```
ansible-galaxy install -r ansible/requirements.yml
```

## Deployment
### Production
Production deployment assumes a hardened server with SELinux and DirectAdmin setup, 
using Apache as a webserver and domains within home-folders as the document root.
```
ansible-playbook -i ansible/hosts.ini ansible/deploy.yml -l production --ask-vault-pass
```
