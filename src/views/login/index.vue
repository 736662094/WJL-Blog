<template>
    <div id="custom-login">
        <div class="login-form">
            <Form ref="formCustom" :model="formCustom" :rules="ruleCustom">
                <p class="login-title">用户登录 / User login</p>
                <FormItem prop="username">
                    <Input type="password" v-model="formCustom.username"></Input>
                </FormItem>
                <FormItem prop="passwd">
                    <Input type="password" v-model="formCustom.passwd"></Input>
                </FormItem>
                <FormItem>
                    <Button type="primary" @click="handleSubmit('formCustom')">登录</Button>
                    <Button @click="handleReset('formCustom')" style="margin-left: 8px">取消</Button>
                </FormItem>
            </Form>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            const validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    callback();
                }
            };
            const validateUsername = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入用户名'));
                } else {
                    callback();
                }
            };
            return {
                formCustom: {
                    passwd: '',
                    username: ''
                },
                ruleCustom: {
                    passwd: [
                        { validator: validatePass, trigger: 'blur' }
                    ],
                    username: [
                        { validator: validateUsername, trigger: 'blur' }
                    ]
                }
            };
        },
        mounted() {

        },
        beforeDestroy() {

        },
        methods: {
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$router.push('/');
                    } else {
                        this.$Message.error('Fail!');
                    }
                });
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            }
        }
    };
</script>
<style scoped lang="scss">
    #custom-login{
        /*background-image: url("../static/img/login-bg.jpg");*/
        /*background: red;*/
        width: 100%;
        height: 100%;
        background: url('../static/img/login-bg.jpg') center;
        background-size: cover;
        position: relative;
        .login-form{
            text-align: center;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            min-width: 300px;
            max-width: 400px;
            width: 30%;
            height: 30%;
            margin: auto;
            .login-title{
                font-size: 150%;
                color:#2d8cf0;
                line-height: 50px;
            }
        }

    }
</style>