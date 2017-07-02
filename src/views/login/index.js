//@flow
import * as Vue from "vue";
import { mapState } from "vuex";
import Component from "vue-class-component";
import './view.html';
import './style.scss';
import { requestLogin } from '../api/api';

@Component({ name: 'Login' })
export default class Login extends VUe {
    data() {
        return {
            logining: false,
            ruleForm2: {
                account: 'admin',
                checkPass: '123456'
            },
            rules2: {
                account: [{
                    required: true,
                    message: '请输入账号',
                    trigger: 'blur'
                }],
                checkPass: [{
                    required: true,
                    message: '请输入密码',
                    trigger: 'blur'
                }]
            },
            checked: true
        };
    }
    handleReset2() {
        this.$refs.ruleForm2.resetFields();
    }
    handleSubmit2(ev) {
        var _this = this;
        this.$refs.ruleForm2.validate((valid) => {
            if (valid) {
                //_this.$router.replace('/table');
                this.logining = true;
                //NProgress.start();
                var loginParams = {
                    username: this.ruleForm2.account,
                    password: this.ruleForm2.checkPass
                };
                requestLogin(loginParams).then(data => {
                    this.logining = false;
                    //NProgress.done();
                    let { msg, code, user } = data;
                    if (code !== 200) {
                        this.$message({
                            message: msg,
                            type: 'error'
                        });
                    } else {
                        sessionStorage.setItem('user', JSON.stringify(user));
                        this.$router.push({
                            path: '/table'
                        });
                    }
                });
            } else {
                console.log('error submit!!');
                return false;
            }
        });
    }
}
