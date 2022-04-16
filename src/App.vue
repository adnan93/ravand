<template>
  <v-app style="font-family: IRYekan">
    <b-row class="home" dir="rtl">
      <b-col cols="1"> </b-col>

      <b-col cols="10">
        <b-row class="topnav pt-3">
          <b-col class="col-sm-3 brand">
            <b-navbar-brand>
              <router-link to="/">
                <h4><b style="color: black"> روند 24 </b></h4>
              </router-link>
            </b-navbar-brand>
          </b-col>

          <b-col class="col-sm-6 ">
            <b-row>
              <v-text-field
                placeholder="جستجو"
                outlined
                color="#10503b"
                class="search pb-1"
                style="
                <!-- border-radius: 15px;
                -->"
              >
                <template slot="append">
                  <v-icon class="mb-2" @click="search()"> search </v-icon>
                </template>
                
              </v-text-field>
            </b-row>
          </b-col>

          <b-col class="col-sm-3" align="center">
            <v-btn color="black" elevation="4" rounded large>
              <p style="color: white">
                <v-icon> login </v-icon>
                ورود
              </p>
            </v-btn>
            <!-- <b-row>
              <b-col class="signup">
                <p class="p-1 pr-8">عضویت</p>
              </b-col>

              <b-col class="login"> 
                <p class="pt-2">ورود</p>
              </b-col>
            </b-row> -->
          </b-col>
        </b-row>

        <b-row class="mr-3 ml-3">
          <b-navbar toggleable="lg" type="dark" variant="dark" class="downnav">
            <!-- <div>
          <b-navbar variant="faded" type="light">
            <b-navbar-brand class="mr-15" href="/">
              <img
                class="mt-0 mb-0 pt-0 pb-0"
                width="55px"
                height="55px"
                src="@/assets/talagram.png"
                alt="طلاگرام"
              />
            </b-navbar-brand>
            </b-navbar>
            </div>  -->

            <b-collapse class="mr-15" id="nav-collapse" is-nav>
              <b-navbar-nav>
                <b-nav-item-dropdown
                  text="انرژی"
                  style="font-size: 1.2rem;
                   text-shadow: 2px 4px 6px #070707; 
                  <!-- font-weight: bold --> "
                >
                  <b-dropdown-item
                    dir="rtl"
                    align="right"
                    href="#"
                    style="text-shadow: none; font-size:0.85em"
                    >نفت و گاز</b-dropdown-item
                  >
                  <hr class="mt-0 mb-0" style="color:green;">
                  <b-dropdown-item class="pl-3" style="text-shadow: none; font-size:0.85em;  text-align:center; " href="#"
                    >پالایشی</b-dropdown-item
                  >
                  <hr class="mt-0 mb-0" style="color:green" >

                  <b-dropdown-item style="text-shadow: none; font-size:0.85em" href="#"
                    >پتروشیمی</b-dropdown-item
                  >
                </b-nav-item-dropdown>

                <b-nav-item
                  class="ml-2 pt-1"
                  href="#"
                  style="font-weight: bold"
                >
                  <h6>
                    <p
                      style="
                        color: #bea44d;
                        font-size: 1.2em;
                        text-shadow: 2px 4px 6px #070707;
                      "
                    >
                      اقتصاد
                    </p>
                  </h6>
                </b-nav-item>

                <b-nav-item
                  class="ml-2 pt-1"
                  href="#"
                  style="font-weight: bold"
                >
                  <h6>
                    <p
                      style="
                        color: #bea44d;
                        font-size: 1.2rem;
                        text-shadow: 2px 4px 6px #070707;
                      "
                    >
                      سهام
                    </p>
                  </h6>
                </b-nav-item>

                <b-nav-item-dropdown
                  text="فلزات"
                  style="font-size: 1.2rem; text-shadow: 2px 4px 6px #070707"
                >
                  <b-dropdown-item
                    dir="rtl"
                    align="right"
                    style="text-shadow: none"
                    href="#"
                    >فلزات گرانبها</b-dropdown-item
                  >
                  <hr class="mt-0 mb-0" style="color:green">
                  <b-dropdown-item style="text-shadow: none" href="#"
                    >فلزات غیر آهنی</b-dropdown-item
                  >
                  <hr class="mt-0 mb-0" style="color:green">

                  <b-dropdown-item style="text-shadow: none" href="#"
                    >زنجیره فولاد</b-dropdown-item
                  >
                </b-nav-item-dropdown>

                <b-nav-item class="ml-2" href="#" style="font-weight: bold">
                  <h6>
                    <p
                      style="
                        color: #bea44d;
                        font-size: 1.2rem;
                        text-shadow: 2px 4px 6px #070707;
                      "
                    >
                      بیشتر
                    </p>
                  </h6>
                </b-nav-item>

                <b-nav-item
                  class="ml-2"
                  @click="checkLogout()"
                  v-show="showBtn()"
                >
                  <h6><b style="color: white">خروج </b></h6>
                </b-nav-item>
              </b-navbar-nav>
            </b-collapse>

            <b-row>
              <b-col>
                <b-navbar-toggle
                  class="mr-2"
                  style="color: white"
                  target="nav-collapse"
                ></b-navbar-toggle>
              </b-col>
            </b-row>
          </b-navbar>
        </b-row>

        <!-- add new -->
        <div>
          <b-modal
            v-model="showCreateModal"
            dir="rtl"
            id="modal-center"
            title=" خروج"
            :header-text-variant="headerTextVariant"
            :header-bg-variant="headerBgVariant"
          >
            <h3>آیا از خروج مطمئن هستید ؟</h3>
            <template #modal-footer>
              <div class="w-100">
                <v-btn
                  class="ml-1"
                  color="#10503B"
                  elevation="3"
                  rounded
                  larg
                  outlined
                  @click="closeCreateModal"
                  >انصراف
                </v-btn>

                <v-btn
                  class="mr-2"
                  color="#10503B"
                  style="color: #ffffff"
                  elevation="3"
                  rounded
                  large
                  @click="logout()"
                >
                  بلی
                </v-btn>
              </div>
            </template>
          </b-modal>
        </div>

        <v-snackbar v-model="snackbarGreen" color="black" dir="rtl">
          {{ text }}

          <template v-slot:action="{ attrs }">
            <v-btn
              color="dark"
              rounded
              v-bind="attrs"
              text
              @click="snackbarGreen = false"
            >
              x
            </v-btn>
          </template>
        </v-snackbar>

        <b-row class="mr-4 ml-4">
          <b-col cols="8" class="main">
                 <router-view />
             </b-col>

          <b-col cols="4" class="watchlist ">
       
          </b-col>
        </b-row>

        <b-row class="footer mr-4 ml-4" align="center">
          <hr />

          <b-col>
            <div>
              <!-- <h5 class="place"><b> راه های ارتباطی </b></h5> -->
              <br />
              <div>
                <h6 style="color: white">
                  شیراز، بلوار شهید رجائی (فرهنگ شهر)، کوچه 30، ساختمان زمرد
                </h6>
              </div>

              <div class="place">
                <h3>
                  <a href="tel:07136317299" style="color: red">
                    071-36317299
                  </a>
                </h3>
              </div>

              <br />
            </div>
          </b-col>
          <hr />
          <br />

          <h6>
            <v-icon style="font-size: 20px"> copyright </v-icon>

            کلیه حقوق متعلق به گروه مالی زمرد ‌می ‌باشد.
          </h6>
          <br />

          <br />
        </b-row>
      </b-col>

      <b-col cols="1"> </b-col>
    </b-row>
  </v-app>
</template>
 
 
 
 <script>
export default {
  data() {
    return {
      token: localStorage.getItem("token"),
      show: true,
      headerBgVariant: "#0f6b4d",

      //logout
      showCreateModal: false,

      //modal

      headerTextVariant: "light",

      //snachbar
      text: "با موفقیت خارج شدید",
      snackbarGreen: false,
    };
  },
  created() {
    // console.log("login..", this.token)

    this.showBtn();
  },
  methods: {
    search() {
      console.log("sdsdd");
    },
    checkLogout() {
      this.openCreateModal();
    },

    showBtn() {
      //  console.log("token: ", this.token);
      if (this.token == null) {
        return false;
      } else {
        return true;
      }
    },

    logout() {
      localStorage.removeItem("token");
      if (this.token) {
        localStorage.removeItem("token");
      }
      this.closeCreateModal();
      this.$router.push({ path: "/" });
      this.snackbarGreen = true;
    },

    openCreateModal() {
      this.showCreateModal = true;
    },

    closeCreateModal() {
      this.showCreateModal = false;
    },
  },
};
</script>
 
 
<style scoped lang="scss">
@font-face {
  font-family: "IRYekan";
  src: local("IRYekan"), url(./font/IRYekan.ttf) format("truetype");
}

::v-deep .nav-link {
  color: #bea44d !important;
  // font-weight: bold;
  // height: 100px;
  // padding: 20px;
  margin: 20px;
}

::v-deep .nav-link :hover {
  color: #eeedea !important;
  font-weight: bold;
}

::v-deep .dropdown-menu {
  position: absolute;
  color: #af8473 !important;
  margin: 0;
  font-size: 1rem;
  text-align: right;
  list-style: -moz-element() !important;
  background-color: rgb(255, 255, 255) !important ;
  background-clip: calc();
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 0.5em;
  box-shadow: 1px 1px 30px 1px #000000;
}

::v-deep a.dropdown-item {
  width: 100%;
  height: 100%;
  padding-right: 1em;
  padding-left: 0 !important ;
  font-weight: 400;
  color: #50ad5c;
  text-align: right !important;
  text-decoration: none;
}

::v-deep a.dropdown-item:hover {
  // display: block;
  width: 100%;
  height: 100%;
  padding-right: 1em;
  padding-left: 0 !important ;
  clear: both;
  font-weight: 400;
  color: #1d201d !important ;
  text-align: right !important;
  text-decoration: none;
  white-space: nowrap;
  border-radius: 1.2em !important;
}

.topnav {
  background-color: #c8cfc7 !important;
  padding-left: 10px;
  border-radius: 14px;
  height: 70px;
  border: #171817;
  box-shadow: 2px 4px 6px rgb(22, 22, 22);
}
.downnav {
  box-shadow: 2px 4px 6px rgb(7, 7, 7);
}

.signup {
  background-color: rgb(228, 236, 227);
  border-radius: 8px;
  height: 35px;
  color: #0c4716;
}

.login {
  background-color: rgb(24, 65, 20);
  border-radius: 10px;
  color: #f4f5f4;
  height: 50px;
  width: 50px;
}

.test {
  text-align: right !important;
  margin: 0 px;
  padding-bottom: 0% !important;
}

.hobabptn :hover {
  background-color: none !important;
}

p {
  padding: 0%;
  margin: 0%;
  margin-bottom: 0% !important;
}
.background {
  margin: 0% !important;
  padding: 0% !important;
  background-color: #f0f0f5;
  width: 7.8rem;
}

a:link {
  text-decoration: none;
  background-color: none !important;
}

a {
  color: white !important;
}

.home {
  background-color: #eceaea;
}

.bg {
  background-color: rgb(211, 18, 18);
}

.footer {
  background-color: #10503b;
}

.navbar.navbar-dark.bg-dark {
  background-color: #10503b !important;
  border-radius: 13px;

  // height: 150px;
}
.modal-header {
  background-color: #10503b !important;
}

.footer {
  background-color: #c8cfc7;
}

.watchlist {
  border-style: outset;
  box-shadow: 2px 4px 6px rgb(22, 22, 22);
}
.main {
  // border: solid #10503b;
}

::v-deep .v-text-field.v-text-field--enclosed .v-text-field__details {
  padding-top: 0px;
  margin-bottom: 0px !important;
}

.v-input__control {
  display: flex;
  flex-direction: column;
  height: 44px !important;
  flex-grow: 1;
  flex-wrap: wrap;
  min-width: 0;
  width: 100%;
}

.brand {
  padding: 0px !important;
}

.search {  
    border-radius: 35px;
  }




::v-deep .v-text-field--outlined > .v-input__control > .v-input__slot {
  align-items: stretch;
  min-height: 40px !important;
}
</style>
