<template>
    <div class="login_container">
        <div class="login_box">
            <!-- loginForm layout -->
            <h3>Daily Recording System</h3>
            <el-form ref="loginFormRef" :model="loginForm" :rules="loginFormRules" label-width="0px" class="login_form">
                <el-form-item prop="username">
                    <el-input v-model="loginForm.username" prefix-icon="iconfont icon-user"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input v-model="loginForm.password" prefix-icon="iconfont icon-3702mima" type="password"></el-input>
                </el-form-item>
                <!-- buttons layout -->
                <el-form-item class="btns">
                    <el-button type="primary" @click="login">Login</el-button>
                    <el-button type="info" @click="resetLoginForm">Reset</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      // loginForm object binding
      loginForm: {
        username: 'admin',
        password: '123456'
      },
      // loginFormRules object binding
      loginFormRules: {
        // verify username in the loginForm legal
        username: [
          { required: true, message: 'Please input username!', trigger: 'blur' },
          { min: 3, max: 10, message: 'Username should be 3 to 10 characters!', trigger: 'blur' }
        ],
        // verify password in the loginForm legal
        password: [
          { required: true, message: 'Please input password!', trigger: 'blur' },
          { min: 6, max: 15, message: 'Password should be 6 to 15 characters', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    resetLoginForm () {
      this.$refs.loginFormRef.resetFields()
    },
    login () {}
  }
}
</script>

<style scoped>
.login_container {
  background: url("../assets/images/login_bg.jpeg") no-repeat center center fixed;
  position:fixed;
  top: 0;
  left: 0;
  width:100%;
  height:100%;
  min-width: 1000px;
  z-index:-10;
  zoom: 1;
  background-color: #fff;
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
  background-position: center 0;
}

.login_box{
    width: 450px;
    height: 300px;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 10px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}

.login_form{
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
}

.btns{
    display: flex;
    justify-content: flex-end;
}

h3 {
  color: skyblue;
  font-weight: bolder;
  font-size: 24px;
}
</style>
