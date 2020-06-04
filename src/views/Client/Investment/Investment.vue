<template>
  <div class="main-container">
    <div class="create-user">
      <div class="user-title mb-3 px-3">Investment Request</div>
      <div class="user-title">
        <div class="recent-transactions table-responsive tab-contents">
          <div class="d-flex justify-content-between flex-wrap mb-3">
            <div>
              <div class="input-group mb-3 mb-md-0">
                <input
                  type="search"
                  placeholder="Search Investment Requests"
                  class="form-control"
                />
                <div class="input-group-append" style="cursor:pointer">
                  <span class="input-group-text">
                    <i class="fa fa-search"></i
                  ></span>
                </div>
              </div>
            </div>
            <!-- </div> -->
            <div
              class="btn btn-info py-2 mt-3 mt-md-0"
              @click="$router.push('/Investment/Precheck')"
            >
              Invest Now
            </div>
          </div>

          <table>
            <tr style="color:whitesmoke" class="btn-secondary">
              <th>Amount</th>
              <th>Duration</th>
              <th>Date Applied</th>
              <th>Status</th>
            </tr>

            <tr v-for="(one, index) in 10" :key="index">
              <td>N200,000</td>
              <td>3 Months</td>
              <td>22-02-2020</td>
              <td>Pending</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Loan",
  components: {
  }
};
</script>

<style lang="scss" scoped>
.tab-contents {
  max-height: 470px;
}

.btn-info {
  background: $background-color;
  border-color: $background-color;
}
</style>
