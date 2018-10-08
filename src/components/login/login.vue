<template>
  <div id="particles">
		<div class="login">
			<div class="login-top">
				登录
			</div>
			<div class="login-center clearfix">
				<div class="login-center-img"><img src="../../assets/img/name.png"/></div>
				<div class="login-center-input">
					<input type="text" name="" value="" placeholder="请输入您的用户名" onfocus="this.placeholder=''" onblur="this.placeholder='请输入您的用户名'"/>
					<div class="login-center-input-text">用户名</div>
				</div>
			</div>
			<div class="login-center clearfix">
				<div class="login-center-img"><img src="../../assets/img/password.png"/></div>
				<div class="login-center-input">
					<input type="password" name="" value="" placeholder="请输入您的密码" onfocus="this.placeholder=''" onblur="this.placeholder='请输入您的密码'"/>
					<div class="login-center-input-text">密码</div>
				</div>
			</div>
			<div class="login-button">登陆</div>
		</div>
    <vue-particles
        color="#dedede"
        :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="4"
        linesColor="#dedede"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      >
      </vue-particles>
  </div>
</template>

<script>
export default {
  name:'login'
}
</script>

<style scoped>
html,body{ 
	width:100%;
	height:100%;
}
canvas{
  display:block;
}
#particles{
	width: 100%;
	height: 100%;
	position: relative;
	background-image: url(../../assets/img/bg.jpg);
	background-position: 50% 50%;
	background-size: cover;
	background-repeat: no-repeat;
	margin-left: auto;
	margin-right: auto;
}

@keyframes sk-rotating-plane{
	0% {
	    -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg);
	    transform: perspective(120px) rotateX(0deg) rotateY(0deg);
	}
	50% {
	    -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
	    transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
	}
	100% {
	    -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
	    transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
	}
}

@keyframes login-small{
	0%{
		transform: scale(1);-moz-transform: scale(1);	/* Firefox 4 */-webkit-transform: scale(1);	/* Safari 和 Chrome */-o-transform: scale(1);	/* Opera */-ms-transform:scale(1); 	/* IE 9 */
	}
	100%{
		transform: scale(0.2);-moz-transform: scale(0.1);	/* Firefox 4 */-webkit-transform: scale(0.2);	/* Safari 和 Chrome */-o-transform: scale(0.1);	/* Opera */-ms-transform:scale(0.1); 	/* IE 9 */
	}
}

.login{z-index: 2;position:absolute;width: 350px;border-radius: 5px;height: 500px;background: white;box-shadow: 0px 0px 5px #333333;top: 50%;left: 50%;margin-top: -250px;margin-left: -175px;transition: all 1s;-moz-transition: all 1s;	/* Firefox 4 */-webkit-transition: all 1s;	/* Safari 和 Chrome */-o-transition: all 1s;	/* Opera */}
.login-top{font-size: 24px;margin-top: 100px;padding-left: 40px;box-sizing: border-box;color: #333333;margin-bottom: 50px;}
.login-center{width: 100%;box-sizing: border-box;padding: 0 40px;margin-bottom: 30px;}
.login-center-img{width: 20px;height: 20px;float: left;margin-top: 5px;}
.login-center-img>img{width: 100%;}
.login-center-input{float: left;width: 230px;margin-left: 15px;height: 30px;position: relative;}
.login-center-input input{z-index: 2;transition: all 0.5s;padding-left: 10px;color: #333333;width: 100%;height: 30px;border: 0;border-bottom: 1px solid #cccccc;border-top: 1px solid #ffffff;border-left: 1px solid #ffffff;border-right: 1px solid #ffffff;box-sizing: border-box;outline: none;position: relative;}
.login-center-input input:focus{border: 1px solid dodgerblue;}
.login-center-input-text{background: white;padding: 0 5px;position: absolute;z-index: 0;opacity: 0;height: 20px;top: 50%;margin-top: -10px;font-size: 14px;left: 5px;color: dodgerblue;line-height: 20px;transition: all 0.5s;-moz-transition: all 0.5s;	/* Firefox 4 */-webkit-transition: all 0.5s;	/* Safari 和 Chrome */-o-transition: all 0.5s;	/* Opera */}
.login-center-input input:focus~.login-center-input-text{top: 0;z-index: 3;opacity: 1;margin-top: -15px;}
.login.active{-webkit-animation: login-small 0.8s ; animation: login-small 0.8s ;animation-fill-mode:forwards;-webkit-animation-fill-mode:forwards}
.login-button{cursor: pointer;width: 250px;text-align: center;height: 40px;line-height: 40px;background-color: dodgerblue;border-radius: 5px;margin: 0 auto;margin-top: 50px;color: white;}


</style>
