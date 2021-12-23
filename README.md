## Hướng dẫn sử dụng

### `Bước 1: Vào aws console`

- Vào trang console aws.
- Vào dịch vụ EC2.
- Làm từ bước 3 tới bước 6 với FE và BE.

### `Bước 2: Tạo security groups`

- Trong dịch vụ EC2 có phần Security groups, nhấn vào đó.
- Nhấn tạo Security groups.
- Đặt tên cho group.
- Ở phần outbound rule add các rule sau:
  | Type | Protocol | Port range | Source |
  | --------------- | -------- | ---------- | --------- |
  | HTTPS | TCP | 443 | 0.0.0.0/0 |
  | SSH | TCP | 22 | 0.0.0.0/0 |
  | HTTP | TCP | 80 | 0.0.0.0/0 |
  | All ICMP - IPv4 | ICMP | All | 0.0.0.0/0 |
  | Custom TCP | TCP | 3000 | 0.0.0.0/0 |
- Nhấn "create security group".

### `Bước 3: Tạo Launch templates`

- Vào mục launch templates vào nhấn vào tạo.
- Đặt tên cho template.
- Ở phầm AMI chọn Cloud9Ubuntu-2020-08-26T15-11.
- Instance type: t2.micro.
- Security groups: chọn Security group vừa mới tạo.
- Phần advanced details => user data, dán đoạn sau vào:

* FE:
  > #!/bin/bash -ex <br>
  > exec > >(tee /var/log/user-data.log|logger -t user-data -s 2>/dev/console) 2>&1 <br>
  > curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash <br>
  > export NVM_DIR="$HOME/.nvm" <br>
> [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm <br>
> [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion" <br>
  > nvm install node <br>
  > sudo rm /var/lib/apt/lists/lock <br>
  > sudo rm /var/cache/apt/archives/lock <br>
  > sudo rm /var/lib/dpkg/lock\* <br>
  > sudo apt update <br>
  > sudo apt install git <br>
  > sudo mkdir /home/ec2-user <br>
  > sudo chmod 777 /home/ec2-user <br>
  > cd /home/ec2-user <br>
  > git clone --single-branch -b master https://github.com/nguyennhi12/fe_cloud <br>
  > cd fe_cloud <br>
  > sudo chmod -R 755 . <br>
  > npm install <br>
  > npm start <br>
* BE:
  > #!/bin/bash -ex <br>
  > exec > >(tee /var/log/user-data.log|logger -t user-data -s 2>/dev/console) 2>&1 <br>
  > curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash <br>
  > export NVM_DIR="$HOME/.nvm" <br>
> [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm <br>
> [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion" <br>
  > nvm install node <br>
  > sudo rm /var/lib/apt/lists/lock <br>
  > sudo rm /var/cache/apt/archives/lock <br>
  > sudo rm /var/lib/dpkg/lock\* <br>
  > sudo apt update <br>
  > sudo apt install git <br>
  > sudo mkdir /home/ec2-user <br>
  > sudo chmod 777 /home/ec2-user <br>
  > cd /home/ec2-user <br>
  > git clone --single-branch -b master https://github.com/nguyennhi12/be_cloud <br>
  > cd fe_cloud <br>
  > sudo chmod -R 755 . <br>
  > npm install <br>
  > npm start <br>

- Nhấn tạo.

### `Bước 4: Tạo target group`

- Đặt tên cho group.
- Dưới phần đặt tên chọn HTTP : 3000(protocol : port).
- Advanced health check setting:

* Port: override 3000

- Tiếp tục.
- Nhấn tạo target group.

### `Bước 5: Tạo Load Balancers`

- Chọn application load balancer.
- Đặt tên cho load balancer.
- Ở phần mapping chọn các Zone mong muốn.
- Security group: chọn cái vừa mới tạo.
- Listeners and routing => forward to chọn target group vừa mới tạo.
- Nhấn tạo Load balancer.

### `Bước 6: Tạo Auto Scaling Group`

- Đặt tên.
- Launch templates: chọn launch templates phù hợp (BE/FE)
- Tiếp theo.
- Availability zones and subnets: chọn các Zone trùng với phần load balancer.
- Attach to an existing load balancer => choose from your load balancer target group.
- Chọn load balancer vừa mới tạo ở trên.
- Additional settings: check.
- Group size: chọn theo mong muốn.
- Scaling policies => target tracking scaling policy => Metric Average CPU Utilizaton
- Target value: tỉ lệ CPU hoạt động bạn mong muốn group sẽ tăng cường máy chủ.
- Next tới cuối cùng và nhấn tạo.
