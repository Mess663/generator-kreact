const Generator = require('yeoman-generator')

const fs = require('fs')

console.log('jinllllll')

module.exports = class extends Generator {
  // prompting() {
  //   return this.prompt([
  //     {
  //       type: 'input',
  //       name: 'appName',
  //       message: '项目名称：',
  //       validate(input) {
  //         if (!input) return '请输入项目名称'
  //         if (fs.readdirSync('.').includes(input)) {
  //           return '目录已存在'
  //         }
  //         return true
  //       },
  //     },
  //     {
  //       type: 'list',
  //       choices: ['Javascript', 'TypeScript'],
  //       name: 'language',
  //       message: '项目语言',
  //       default: 'TypeScript',
  //     },
  //   ]).then(answers => {
  //     this.answers = answers
  //   })
  // }

  // writing() {
  //   console.log(this.answers)
  // }

  // end() {
  //   this.log('happy coding!')
  // }

  constructor(args, opts) {
    super(args, opts);

    console.log(args, opts)
  
    // This makes `appname` a required argument.
    this.argument("appname", { type: String, required: true });

    // And you can then access it later; e.g.
    this.log(this.options.appname);
  }

  method1() {
    console.log('method 1')
  }

  method2() {
    console.log('method 2')
  }
}
