<template>
  <div class="main-container">
    <Loader :loading="loading" loading-text="please wait..." />
    <div class="create-user">
      <div class="user-title mb-5">
        <div class="col-12">
          <span class="create mr-4 mr-sm-5" @click="create">Create User</span>
          <span class="manage" :class="{ active: true }" @click="manage"
            >Manage User</span
          >
        </div>
      </div>
      <div class="row mb-5 mt-n4">
        <div class="col-12">
          <b-tabs pills no-body :active-nav-item-class="current">
            <!-- Agent Tab -->
            <b-tab :title-link-class="active1" title="Agent">
              <div class="line mb-3 mt-2"></div>
              <div class>
                <div class="user-title card mb-0">
                  <div class="col-12 tab-contents1">
                    <div class="top mb-2">
                      <div class="mb-3">Agent</div>
                      <div>
                        <div class="input-group float-right">
                          <input
                            type="search"
                            placeholder="Search Agent"
                            class="form-control"
                          />
                          <div class="input-group-append">
                            <div class="input-group-text">
                              <i class="fa fa-search"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="recent-transactions table-responsive">
                      <table>
                        <tr style="color:whitesmoke" class="bg-secondary">
                          <th>Agent ID</th>
                          <th>Agent Name</th>
                          <th>Email</th>
                          <th>Phone Number</th>
                          <th>Wallet Balance</th>
                          <!-- <th>Today Deposit</th> -->
                          <th>Total Deposit</th>
                          <th>Account Created</th>
                          <!-- <th>Account Created Target</th> -->
                          <th>Delete</th>
                        </tr>

                        <tr
                          v-for="(agent, index) in AGENT_DATA.slice(1)"
                          :key="index"
                        >
                          <td>{{ agent_id(index) }}</td>
                          <td>{{ agent.firstname }} {{ agent.lastname }}</td>
                          <td>{{ agent.email }}</td>
                          <td>{{ agent.phone }}</td>
                          <td v-if="agent.wallet">
                            &#8358; {{ formatAmount(agent.wallet.balance) }}
                          </td>
                          <td v-else>0</td>
                          <!-- <td v-if="agent.wallet">
                            &#8358;{{ agent.wallet.todayDeposit }}
                          </td>
                          <td v-else>0</td> -->
                          <td v-if="agent.wallet">
                            &#8358;
                            {{ formatAmount(agent.wallet.totalDeposit) }}
                          </td>
                          <td v-else>0</td>
                          <!-- <td>{{ agent.accountCreated }}</td> -->
                          <!-- <td>{{ agent.target }}</td> -->
                          <td>{{ getAgentCustomers(agent._id) }}</td>
                          <!-- <td>300</td> -->
                          <td class="text-danger action">Delete</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </b-tab>

            <!-- Customer Tab -->
            <b-tab :title-link-class="active1" title="Customer">
              <div class="line mb-3 mt-2"></div>
              <div class="tab-c">
                <div class="user-title card mb-0">
                  <div class="col-12 tab-contents1">
                    <div class="top mb-2">
                      <div class="mb-3">Customer</div>
                      <div>
                        <div class="input-group float-right">
                          <input
                            type="search"
                            placeholder="Search Customer"
                            class="form-control"
                          />
                          <div class="input-group-append">
                            <div class="input-group-text">
                              <i class="fa fa-search"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="recent-transactions table-responsive">
                      <table>
                        <tr style="color:whitesmoke" class="bg-secondary">
                          <th>Name</th>
                          <th>Email Address</th>
                          <th>Phone Number</th>
                          <th>Acount Number</th>
                          <th>Home Address</th>
                          <th>DOB</th>
                          <th>Account Balance</th>
                          <th>Delete</th>
                        </tr>

                        <tr
                          v-for="(customer, index) in Customers.slice(1)"
                          :key="index"
                        >
                          <td>
                            {{ customer.firstname }} {{ customer.lastname }}
                          </td>
                          <td>{{ customer.email }}</td>
                          <td>{{ customer.phone }}</td>
                          <td>{{ customer.account.accounts[0].number }}</td>
                          <td>{{ customer.address }}</td>
                          <td>{{ customer.dob }}</td>
                          <td>
                            &#8358;
                            {{
                              formatAmount(customer.account.accounts[0].balance)
                            }}
                          </td>
                          <td class="text-danger action">Delete</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </b-tab>
          </b-tabs>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loader from "../../../utils/vue-loader/loader.vue";
//import { adminService } from "../../../services/AdminServices/admin.services";
import { clientService } from "../../../services/ClientServices/client.services";
import { mapState } from "vuex";

export default {
  name: "Dashboard",
  components: {
    Loader
  },
  data() {
    return {
      loading: false,
      Customers: []
    };
  },
  computed: {
    current() {
      return ["current"];
    },
    active1() {
      return ["tab"];
    },
    Customers_() {
      return this.Customers.slice(1);
    },
    ...mapState({
      AGENT_DATA: state => state.Agent.AGENT_DATA
    })
  },
  methods: {
    create() {
      this.$router.push("/Admin/User/Create");
    },
    manage() {
      this.$router.push("/Admin/User/Manage");
    },
    agent_id(n) {
      let agent = this.AGENT_DATA[n];
      let id = agent._id.substring(1, 10);
      return id;
    },
    formatAmount(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); //this function automatically adds commas to the value where necessary
    },
    //get all customers tied to an agent
    getAgentCustomers(id) {
      let customers = this.Customers;
      let filtered = customers.filter(item => {
        return item.agent["_id"] == id;
        //window.console.log(items);
        //return items.length;
      });
      window.console.log("filtered is", filtered.length);
      return filtered.length;
    },
    //get all customers
    async getCustomers() {
      this.loading = true;
      await clientService
        .getCustomers()
        .then(res => {
          this.$toastr.s("Fetched Succesfully");
          this.Customers = res;
          window.console.log(this.Customers);
        })
        .catch(err => {
          this.$toastr.e(err.message || err, "Failed!");
        })
        .finally(() => {
          this.loading = false;
        });
    }
  },
  mounted() {
    this.getCustomers();
  }
};
</script>

<style lang="scss">
.action:hover {
  text-decoration: underline;
  cursor: pointer;
}
</style>
