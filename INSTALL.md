# [Software name]



- ## Installation instructions

[Describe installation instructions of the software.] This project needs some requirements to work propertly:
- [Node JS 12.18.4](https://nodejs.org/es/)
- NPM 6.14.6
NPM is automatically installed with NodeJS

1. Clone repo with command `git clone [link of the repositorie]`

2. Once the repo is cloned on your computer, to install all dependencies execute:

```shell
$ npm install
```
3. The project has two types of services, Open and Closed: 

    - To start services belong to Open tools, it works on PORT:4003 by default, execute: 
    ```shell
    $ npm run service:openTools
    ```
    Coexpression service belongs to Open Tools

    - To start services belong to Closed tools, it works on PORT:4002 by default, execute: 
    ```shell
    $ npm run service:closedTools
    ```
    DTT service belongs to Closed Tools

    - It is posible to start both services concurrently with command: 
    ```shell
    $ npm run services
    ```

4. To use Apollo Federation structure is necesarie to all services start up, then execute:
```shell
$ npm run gateway
```
Gateway will use PORT:4001 by default

- ### Expected Directory Structure 

[Directory structure after installation. It should be properly organised in sub-directories (for documentation, headers, source, etc.]



- ### Dependencies

[All required or optional dependencies should be listed, including those by third parties (with references to their websites).]


- ### Errors & Tips
[Describe possible errors that can be occur during the installation software and their solution.]
