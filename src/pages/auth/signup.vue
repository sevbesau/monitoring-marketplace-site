<template>
  <div class="h-screen w-screen flex flex-row items-center justify-center relative overflow-hidden">
    <div class="w-screen h-screen absolute top-0 left-0 z-0" id="background-animation" ></div>
    <div class="absolute top-0 w-screen left-0 flex flex-row items-center justify-between px-20 py-10 pt-10 z-10">
      <div class="flex flex-row items-center justify-start">
        <img v-if="false" class="h-12" src="@/assets/images/sputnik-logo-full-white.png" alt="">
      </div>
      <div class="dark:text-gray-500 text-gray-500 text-sm">
        Already an account? <router-link class="text-blauw font-semibold" to="/login">Sign in</router-link>
      </div>
    </div>
    <div class="flex flex-col items-center justify-center z-50" style="width: 500px">
      <div class="w-full" :class="{'shake' : error_animation}" >
          <h2 class="lg:text-4xl tracking-tighter font-semibold sm:text-4xl text-center dark:text-white">Hello explorer!</h2>
          <p class="text-gray-600 dark:text-gray-500 leading-none text-center mb-20">Ready to conquer the world? Create an account.</p>

          <div class="my-10 flex flex-col items-start justify-start w-full">

            <div for="email" class="w-full mb-1"><span class="font-semibold dark:text-white text-sm pl-2  shadow-xl">Firstname</span></div>
            <input tabindex="1" autocomplete="firstname" type="text" required class=" shadow-xl hover:bg-gray-100 transition duration-300 px-3 py-2 rounded-xl form-input2 dark:text-gray-200 dark:hover:bg-gray-900 dark:hover:border-gray-900 w-full mb-4 focus:ring-blauw focus:ring-2" placeholder="Firstname" v-model="input.firstname">

            <div for="email" class="w-full mb-1"><span class="font-semibold dark:text-white text-sm pl-2  shadow-xl">Lastname</span></div>
            <input tabindex="1" autocomplete="lastname" type="text" required class=" shadow-xl hover:bg-gray-100 transition duration-300 px-3 py-2 rounded-xl form-input2 dark:text-gray-200 dark:hover:bg-gray-900 dark:hover:border-gray-900 w-full mb-4 focus:ring-blauw focus:ring-2" placeholder="Lastname" v-model="input.lastname">


            <div for="email" class="w-full mb-1"><span class="font-semibold dark:text-white text-sm pl-2  shadow-xl">Email</span></div>
            <input tabindex="1" autocomplete="email" type="text" required class=" shadow-xl hover:bg-gray-100 transition duration-300 px-3 py-2 rounded-xl form-input2 dark:text-gray-200 dark:hover:bg-gray-900 dark:hover:border-gray-900 w-full mb-4 focus:ring-blauw focus:ring-2" placeholder="Email address" v-model="input.email">


            <div class="w-full flex items-center justify-start mb-1"><span class="font-semibold dark:text-white text-sm pl-2 shadow-xl">Password</span></div>
            <input tabindex="2" id="password" type="password" autocomplete="current-password" required class="shadow-xl hover:bg-gray-100 transition duration-300 px-3 py-2 rounded-xl form-input2 dark:text-gray-200 dark:hover:bg-gray-900 dark:hover:border-gray-900 w-full focus:ring-blauw focus:ring-2" placeholder="Password" v-model="input.password">
            <div class="relative h-8 w-full px-3 py-2">
              <p v-if="error" class="text-red-500 font-medium text-sm outline-none">Sorry, {{error}}</p>
            </div>
          </div>

          <button @click="signup()" class="text-sm font-bold bg-gray-100 dark:bg-blauw hover:bg-indigo-500 text-white w-full py-4 rounded-xl mr-2 capitalize focus:outline-none transition duration-300">Create your account</button>
      </div>
      <div class="mt-4">
        <a href="https://monitoring.app" class="text-gray-600 text-sm">&#169; 2021 Montoring.app </a>
      </div>
    </div>
  </div>
</template>

<script>
  import auth from '@/helpers/auth';
  //import * as THREE from 'three';

  export default {
    name: 'signup',
    data() {
      return {
        error: false,
        error_animation: false,

        input: {
          firstname: '',
          lastname: '',
          email: "",
          password: ""
        },

      }
    },
    methods: {
      myEventHandler() {
        console.log('event changed');
        this.createBackground();
      },
      async signup() {
        const user = await auth.signup(this.input);


        // Check if the user is set (which should, otherwise we should have an error)
        if(user && user.token){

          // OK You are now loggedin. Refresh your state
          this.user = await auth.me().catch(function(e){
            console.log('NOT LOGGEDIN', e);
          });
          this.$store.commit('setUser', this.user);



          this.$router.push('/');
        } else {
          this.error = user.error;
          this.error_animation = true;
          setTimeout(() =>{
            this.error_animation = false;
          }, 2000);
        }

      },
      resetPassword() {
        this.$router.replace({
          name: "reset_password"
        });
      },
      /*
      createBackground(){ //star animation
          var camera, scene, renderer, stars = [];

          //assign three.js objects to each variable
          function init(){
            //camera
            camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
            camera.position.z = 5;

            //scene
            scene = new THREE.Scene();
            scene.background = new THREE.Color( 0x1e1e2a );

            //renderer
            renderer = new THREE.WebGLRenderer();
            //set the size of the renderer
            renderer.setSize( window.innerWidth, window.innerHeight );

            //add the renderer to the html document body
            document.getElementById('background-animation').appendChild( renderer.domElement );
          }

          function addSphere(){
              // The loop will move from z position of -1000 to z position 1000, adding a random particle at each position.
              for ( var z= -1000; z < 1000; z+=20 ) {
                // Make a sphere (exactly the same as before).
                var geometry   = new THREE.SphereGeometry(0.5, 32, 32)
                var material = new THREE.MeshBasicMaterial( {color: 0xffffff} );
                var sphere = new THREE.Mesh(geometry, material)

                // This time we give the sphere random x and y positions between -500 and 500
                sphere.position.x = Math.random() * 1000 - 500;
                sphere.position.y = Math.random() * 1000 - 500;

                // Then set the z position to where it is in the loop (distance of camera)
                sphere.position.z = z;

                // scale it up a bit
                sphere.scale.x = sphere.scale.y = 2;

                //add the sphere to the scene
                scene.add( sphere );

                //finally push it to the stars array
                stars.push(sphere);
              }
          }

          function animateStars() {

            // loop through each star
            for(var i=0; i<stars.length; i++) {

              var star = stars[i];

              // and move it forward dependent on the mouseY position.
              star.position.z +=  i/10;

              // if the particle is too close move it to the back
              if(star.position.z>1000) star.position.z-=2000;
            }

          }

          function render() {
            //get the frame
            requestAnimationFrame( render );

            //render the scene
            renderer.render( scene, camera );
            animateStars();

          }

          init();
          addSphere();
          render();
      }
      */
    },
    async mounted() {

      this.user = await auth.me().catch(() => {});
      if (this.user && this.user._id) {
        console.log("Already loggedin... you can't do this twice");
        this.$store.commit('setUser', this.user);
        this.$router.push('/');
      }

      //this.createBackground();
    },
    created() {
      window.addEventListener('keydown', (e) => {
        if (e.key == 'Enter') {
          this.login();
        }
      });
      window.addEventListener("resize", this.myEventHandler);
    },
    destroyed() {
      window.removeEventListener("resize", this.myEventHandler);
    },
  }
</script>

<style>
  .shake{
    animation: shake 200ms 2 linear;
    -moz-animation: shake 200ms 2 linear;
    -webkit-animation: shake 200ms 2 linear;
    -o-animation: shake 200ms 2 linear;
  }
  @keyframes shake {
    0% {
      transform: translate(4px, 0);
    }
    50% {
      transform: translate(-4px, 0);
    }
    100% {
      transform: translate(0, 0);
    }
  }

	@-moz-keyframes shake {
    0% {
      -moz-transform: translate(4px, 0);
    }
    50% {
      -moz-transform: translate(-4px, 0);
    }
    100% {
      -moz-transform: translate(0, 0);
    }
  }

	@-webkit-keyframes shake {
    0% {
      -webkit-transform: translate(4px, 0);
    }
    50% {
      -webkit-transform: translate(-4px, 0);
    }
    100% {
      -webkit-transform: translate(0, 0);
    }
  }

	@-ms-keyframes shake {
    0% {
      -ms-transform: translate(4px, 0);
    }
    50% {
      -ms-transform: translate(-4px, 0);
    }
    100% {
      -ms-transform: translate(0, 0);
    }
  }

	@-o-keyframes shake {
    0% {
      -o-transform: translate(4px, 0);
    }
    50% {
      -o-transform: translate(-4px, 0);
    }
    100% {
      -o-transform: translate(0, 0);
    }
  }
</style>
