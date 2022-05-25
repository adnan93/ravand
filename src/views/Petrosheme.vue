<template>
  <div class="home">
    <div class="pl-0 pr-0" id="nav">
      <br />

                  <b-row> <h3 class="tableTitle" >  پتروشیمی</h3> </b-row>


      <b-row>
        <b-tabs>
          <b-tab title="همه" active>
            <v-card>
              <v-card-title>
                <v-text-field
                  v-model="search"
                  placeholder="جستجو"
                  hide-details
                  align="center"
                ></v-text-field>
              </v-card-title>
              <v-data-table
                :mobile-breakpoint="320"
                height="500px"
                :headers="headers"
                :items="desserts"
                :search="search"
              ></v-data-table>
            </v-card>
          </b-tab>
          <b-tab title="آمونیاک">
            <v-card>
              <v-card-title>
                <v-text-field
                  v-model="search"
                  placeholder="جستجو"
                  hide-details
                  align="center"
                ></v-text-field>
              </v-card-title>
              <v-data-table
                :mobile-breakpoint="320"
                height="500px"
                :headers="headers"
                :items="desserts"
                :search="search"
              ></v-data-table>
            </v-card>
          </b-tab>
          <b-tab title="متانول"></b-tab>
          <b-tab title="یالیفین"></b-tab>

          <b-tab title="آروماتیک"></b-tab>

          <b-tab title="سایر"></b-tab>
        </b-tabs>
      </b-row>

      <br />

      <v-snackbar v-model="snackbarGreen" :color="snackColor" dir="rtl">
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
    </div>
  </div>
</template>

<script>
// import axios from "axios";

export default {
  name: "Login",
  computed: {},

  components: {},

  data() {
    return {
      AllUsers: [],

      search: "",
      headers: [
        { text: "نمودار", align: "center", value: "fat" },
        { text: "أخرين تغييرات (%)", align: "center", value: "iron" },
        { text: "قيمت", align: "center", value: "calories" },
        { text: "تاريخ ", align: "center", value: "protein" },
        {
          text: "نام",
          align: "center",
          value: "name",
        },
      ],

      desserts: [
        {
          name: "Bret",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: "1%",
        },
        {
          name: "WTI - CL",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: "1%",
        },
        {
          name: "نفت دبی",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: "7%",
        },
        {
          name: "نفت شانگ های",
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: "8%",
        },
        {
          name: "Gingerbread",
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: "16%",
        },
        {
          name: "Jelly bean",
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: "0%",
        },
        {
          name: "Lollipop",
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: "2%",
        },
        {
          name: "Honeycomb",
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: "45%",
        },
        {
          name: "Donut",
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: "22%",
        },
        {
          name: "نفت ایران",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: "6%",
        },
      ],

      IsAdmin: "",
      loadingbtn: false,
      //snack
      snackColor: "",
      snackbarGreen: false,
      text: "",
      token: "",

      //date
      today: 0,

      //form
      form: {
        Username: "",
        Password: "",
      },
      show4: false,

      //validation

      phoneRules: {
        required: (value) => !!value || "این فیلد الزامی است",
        validNum: (v) => /^[\s۰-۹\s0-9]+$/.test(v) || "شماره معتبر نیست",
      },
    };
  },

  methods: {
    btncolor() {},
    async onSubmit(event) {
      this.loadingbtn = true;
      event.preventDefault();
      await this.CustomerLogIn(this.form);

      this.text = await this.getMessage;
      this.IsAdmin = await this.getIsAdmin;

      if ((await this.getMessageType) == 1 && this.IsAdmin == 1) {
        this.snackColor = "green";

        //  console.log("IsssAdmin", this.getIsAdmin);

        this.$router.push({ path: "/Announcement" });
      } else if ((await this.getMessageType) == 1 && this.IsAdmin == 0) {
        this.$router.push({ path: "/AnnouCustomer" });
      }
      this.snackbarGreen = true;
      this.loadingbtn = false;
    },
  },

  async created() {
    //date
    this.today = new Date().toLocaleDateString("fa-IR");

    // if (!window.location.hash) {
    //   window.location = window.location + "#loaded";
    //   window.location.reload();
    // }
  },
};
</script>


<style >
.nav-tabs {
  white-space: nowrap;
  overflow: auto;
  overflow-y: hidden;
  padding: 0 !important;
  margin: 0 !important;
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
  width: 10rem;
}
.home {
  background-color: #f0f0f5;
}

.card-header {
  background-color: #10503b;
}

.v-data-table {
  overflow-y: auto;
  direction: ltr;
  text-align: left;
}
.li.nav-item {
  background-color: red;
}

.nav-link {
  color: #bea44d !important;
  margin: 5px !important;
}

.tableTitle{
  margin-right: 0.2em;
  color: #10503b;
}
</style>
