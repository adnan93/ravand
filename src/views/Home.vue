<template>
  <div class="home">
    <div id="nav">
      <br />

      <b-row>
        <b-col cols="10">
          <b-row>
            <b-tabs class="mt-" align="left">
              <b-row>
                <b-tab title="همه" :title-link-class="'tab-title-class'">
                  <div>
                    <b-table
                      :items="AllUsers"
                      :fields="Customerfields"
                      striped
                      responsive="sm"
                      hover
                      :busy="customerTableLoading"
                      loading-text="در حال بارگیری ..."
                    >
                      <template #table-busy>
                        <div class="text-center my-2">
                          <b-spinner class="align-middle"></b-spinner>
                          <strong>در حال دریافت اطلاعات...</strong>
                        </div>
                      </template>

                      <template #cell(details)="row">
                        <v-icon
                          @click="showDetails(row)"
                          style="font-size: 20px; color: #0f6b4d"
                          >account_box</v-icon
                        >
                      </template>

                      <template #cell(CustomerScores)="row">
                        <v-icon
                          @click="showCustomerScores(row)"
                          style="font-size: 20px; color: #0f6b4d"
                          >view_list</v-icon
                        >
                      </template>

                      <template #cell(CustomerPrograms)="row">
                        <v-icon
                          @click="showCustomerPrograms(row)"
                          style="font-size: 20px; color: #0f6b4d"
                          >poll</v-icon
                        >
                      </template>

                      <template #cell(addingScores)="row">
                        <v-icon
                          align="center"
                          @click="addScoreToCustomer(row)"
                          style="font-size: 20px; color: #0f6b4d"
                          >add_circle</v-icon
                        >
                      </template>

                      <template #cell(score)="row">
                        <v-icon
                          align="center"
                          @click="showScore(row)"
                          style="font-size: 20px; color: #0f6b4d"
                          >star_rate</v-icon
                        >
                      </template>

                      <template #cell(actions)="row">
                        <v-icon
                          @click="editCustRow(row)"
                          style="font-size: 20px; color: #0f6b4d"
                          >edit</v-icon
                        >

                        <v-icon
                          @click="deleteCustRow(row)"
                          style="font-size: 20px; color: #f7b73a"
                          >delete_outline</v-icon
                        >
                      </template>
                    </b-table>
                  </div>
                </b-tab>
                <b-tab title=" نفت " :title-link-class="'tab-title-class'">
                  <div>
                    <b-table
                      :items="AllUsers"
                      :fields="Customerfields"
                      striped
                      responsive="sm"
                      hover
                      :busy="customerTableLoading"
                      loading-text="در حال بارگیری ..."
                    >
                      <template #table-busy>
                        <div class="text-center my-2">
                          <b-spinner class="align-middle"></b-spinner>
                          <strong>در حال دریافت اطلاعات...</strong>
                        </div>
                      </template>

                      <template #cell(details)="row">
                        <v-icon
                          @click="showDetails(row)"
                          style="font-size: 20px; color: #0f6b4d"
                          >account_box</v-icon
                        >
                      </template>

                      <template #cell(CustomerScores)="row">
                        <v-icon
                          @click="showCustomerScores(row)"
                          style="font-size: 20px; color: #0f6b4d"
                          >view_list</v-icon
                        >
                      </template>

                      <template #cell(CustomerPrograms)="row">
                        <v-icon
                          @click="showCustomerPrograms(row)"
                          style="font-size: 20px; color: #0f6b4d"
                          >poll</v-icon
                        >
                      </template>

                      <template #cell(addingScores)="row">
                        <v-icon
                          align="center"
                          @click="addScoreToCustomer(row)"
                          style="font-size: 20px; color: #0f6b4d"
                          >add_circle</v-icon
                        >
                      </template>

                      <template #cell(score)="row">
                        <v-icon
                          align="center"
                          @click="showScore(row)"
                          style="font-size: 20px; color: #0f6b4d"
                          >star_rate</v-icon
                        >
                      </template>

                      <template #cell(actions)="row">
                        <v-icon
                          @click="editCustRow(row)"
                          style="font-size: 20px; color: #0f6b4d"
                          >edit</v-icon
                        >

                        <v-icon
                          @click="deleteCustRow(row)"
                          style="font-size: 20px; color: #f7b73a"
                          >delete_outline</v-icon
                        >
                      </template>
                    </b-table>
                  </div>
                </b-tab>
                <b-tab title="اسپرد نفت" :title-link-class="'tab-title-class'">
                  <div>
                    <b-table
                      :items="AllUsers"
                      :fields="Customerfields"
                      striped
                      responsive="sm"
                      hover
                      :busy="customerTableLoading"
                      loading-text="در حال بارگیری ..."
                    >
                      <template #table-busy>
                        <div class="text-center my-2">
                          <b-spinner class="align-middle"></b-spinner>
                          <strong>در حال دریافت اطلاعات...</strong>
                        </div>
                      </template>

                      <template #cell(details)="row">
                        <v-icon
                          @click="showDetails(row)"
                          style="font-size: 20px; color: #0f6b4d"
                          >account_box</v-icon
                        >
                      </template>

                      <template #cell(CustomerScores)="row">
                        <v-icon
                          @click="showCustomerScores(row)"
                          style="font-size: 20px; color: #0f6b4d"
                          >view_list</v-icon
                        >
                      </template>

                      <template #cell(CustomerPrograms)="row">
                        <v-icon
                          @click="showCustomerPrograms(row)"
                          style="font-size: 20px; color: #0f6b4d"
                          >poll</v-icon
                        >
                      </template>

                      <template #cell(addingScores)="row">
                        <v-icon
                          align="center"
                          @click="addScoreToCustomer(row)"
                          style="font-size: 20px; color: #0f6b4d"
                          >add_circle</v-icon
                        >
                      </template>

                      <template #cell(score)="row">
                        <v-icon
                          align="center"
                          @click="showScore(row)"
                          style="font-size: 20px; color: #0f6b4d"
                          >star_rate</v-icon
                        >
                      </template>

                      <template #cell(actions)="row">
                        <v-icon
                          @click="editCustRow(row)"
                          style="font-size: 20px; color: #0f6b4d"
                          >edit</v-icon
                        >

                        <v-icon
                          @click="deleteCustRow(row)"
                          style="font-size: 20px; color: #f7b73a"
                          >delete_outline</v-icon
                        >
                      </template>
                    </b-table>
                  </div>
                </b-tab>

                <b-tab title="CFTC" :title-link-class="'tab-title-class'">
                  <div>
                    <b-table
                      :items="AllUsers"
                      :fields="Customerfields"
                      striped
                      responsive="sm"
                      hover
                      :busy="customerTableLoading"
                      loading-text="در حال بارگیری ..."
                    >
                      <template #table-busy>
                        <div class="text-center my-2">
                          <b-spinner class="align-middle"></b-spinner>
                          <strong>در حال دریافت اطلاعات...</strong>
                        </div>
                      </template>

                      <template #cell(details)="row">
                        <v-icon
                          @click="showDetails(row)"
                          style="font-size: 20px; color: #0f6b4d"
                          >account_box</v-icon
                        >
                      </template>

                      <template #cell(CustomerScores)="row">
                        <v-icon
                          @click="showCustomerScores(row)"
                          style="font-size: 20px; color: #0f6b4d"
                          >view_list</v-icon
                        >
                      </template>

                      <template #cell(CustomerPrograms)="row">
                        <v-icon
                          @click="showCustomerPrograms(row)"
                          style="font-size: 20px; color: #0f6b4d"
                          >poll</v-icon
                        >
                      </template>

                      <template #cell(addingScores)="row">
                        <v-icon
                          align="center"
                          @click="addScoreToCustomer(row)"
                          style="font-size: 20px; color: #0f6b4d"
                          >add_circle</v-icon
                        >
                      </template>

                      <template #cell(score)="row">
                        <v-icon
                          align="center"
                          @click="showScore(row)"
                          style="font-size: 20px; color: #0f6b4d"
                          >star_rate</v-icon
                        >
                      </template>

                      <template #cell(actions)="row">
                        <v-icon
                          @click="editCustRow(row)"
                          style="font-size: 20px; color: #0f6b4d"
                          >edit</v-icon
                        >

                        <v-icon
                          @click="deleteCustRow(row)"
                          style="font-size: 20px; color: #f7b73a"
                          >delete_outline</v-icon
                        >
                      </template>
                    </b-table>
                  </div>
                </b-tab>

                <b-tab title=" سایر " :title-link-class="'tab-title-class'">
                  <div>
                    <b-table
                      :items="AllUsers"
                      :fields="Customerfields"
                      striped
                      responsive="sm"
                      hover
                      :busy="customerTableLoading"
                      loading-text="در حال بارگیری ..."
                    >
                      <template #table-busy>
                        <div class="text-center my-2">
                          <b-spinner class="align-middle"></b-spinner>
                          <strong>در حال دریافت اطلاعات...</strong>
                        </div>
                      </template>

                      <template #cell(details)="row">
                        <v-icon
                          @click="showDetails(row)"
                          style="font-size: 20px; color: #0f6b4d"
                          >account_box</v-icon
                        >
                      </template>

                      <template #cell(CustomerScores)="row">
                        <v-icon
                          @click="showCustomerScores(row)"
                          style="font-size: 20px; color: #0f6b4d"
                          >view_list</v-icon
                        >
                      </template>

                      <template #cell(CustomerPrograms)="row">
                        <v-icon
                          @click="showCustomerPrograms(row)"
                          style="font-size: 20px; color: #0f6b4d"
                          >poll</v-icon
                        >
                      </template>

                      <template #cell(addingScores)="row">
                        <v-icon
                          align="center"
                          @click="addScoreToCustomer(row)"
                          style="font-size: 20px; color: #0f6b4d"
                          >add_circle</v-icon
                        >
                      </template>

                      <template #cell(score)="row">
                        <v-icon
                          align="center"
                          @click="showScore(row)"
                          style="font-size: 20px; color: #0f6b4d"
                          >star_rate</v-icon
                        >
                      </template>

                      <template #cell(actions)="row">
                        <v-icon
                          @click="editCustRow(row)"
                          style="font-size: 20px; color: #0f6b4d"
                          >edit</v-icon
                        >

                        <v-icon
                          @click="deleteCustRow(row)"
                          style="font-size: 20px; color: #f7b73a"
                          >delete_outline</v-icon
                        >
                      </template>
                    </b-table>
                  </div>
                </b-tab>

              
              </b-row>
            </b-tabs>
          </b-row>
        </b-col>
      </b-row>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
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
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Login",
  computed: mapGetters([
    "getToken",
    "getMessage",
    "getMessageType",
    "getIsAdmin",
  ]),

  components: {},

  data() {
    return {
      AllUsers: [],

      Customerfields: [
        { FullName: "نام" },
        { details: "قیمت" },
        { CustomerScores: " آخرین تغییرات%" },
        { CustomerPrograms: "تاریخ" },
        { addingScores: "نمودار" },
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
    ...mapActions(["CustomerLogIn"]),

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

    if (!window.location.hash) {
      window.location = window.location + "#loaded";
      window.location.reload();
    }
  },
};
</script>


<style scope>
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
</style>
