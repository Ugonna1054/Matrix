<template>
  <div class="home">
    <Loader :loading="loading" loading-text="please wait..." />
    <a id="show-sidebar" class="btn btn-sm btn-dark" href="#">
      <i class="fas fa-bars"></i>
    </a>
    <nav id="sidebar" class="sidebar-wrapper">
      <div class="sidebar-content">
        <div class="sidebar-brand">
          <div id="close-sidebar" class="d-block d-md-none">
            <i class="fas fa-times"></i>
          </div>
        </div>
        <div class="sidebar-headers mt-5">
          <div class="user-pic">
            <img v-if="USER_DATA" class="avatar img-fluid" alt="avatar" :src="USER_DATA.passport" />
            <img v-else class="img-fluid" src="../../assets/images/avatar.jpg" alt="User picture" />
          </div>
          <div class="user-info">
            <span class="user-name">
              Hi!
              <strong>{{ CapitalizeFirst(USER_DATA.firstname) }}</strong>
            </span>
          </div>
        </div>
        <!-- sidebar-header  -->

        <!-- sidebar-body  -->
        <div class="sidebar-menu">
          <ul>
            <label class="header-menu">
              <span>Overview</span>
            </label>
            <li :class="{ active: isHome }" @click="home">
              <router-link to="/admin/dashboard">
                <i class="icons fa fa-home"></i>
                <span class="event">Dashboard</span>
              </router-link>
            </li>
            <li :class="{ active: isAccount }" @click="account">
              <router-link to="/admin/user/create">
                <i class="icons fas fa-receipt"></i>
                <span class="event">User Management</span>
              </router-link>
            </li>
            <li :class="{ active: isTransfer }" @click="transfer">
              <router-link to="/admin/approvals">
                <i class="icons fas fa fa-chart-line"></i>
                <span class="event">Approvals</span>
              </router-link>
            </li>
            <li :class="{ active: isFund }" @click="fund">
              <router-link to="/admin/reports">
                <i class="icons fas fa fa-chart-line"></i>
                <span class="event">Reports</span>
              </router-link>
            </li>
            <li>
              <a @click="logout" style="cursor:pointer">
                <i class="icons fa fa-sign-out-alt"></i>
                <span class="event">Logout</span>
              </a>
            </li>
          </ul>
        </div>
        <!-- sidebar-menu  -->
      </div>
      <!-- sidebar-content  -->

      <div class="diamond-wrapper">
        <div id="diamond"></div>
      </div>

      <div class="diamond-wrapper-sm">
        <div id="diamond-sm" class="d-none d-md-block"></div>
      </div>
    </nav>
    <!-- sidebar-wrapper  -->

    <!-- page-content" -->
  </div>
  <!-- page-wrapper -->
</template>

<script>
import $ from "jquery";
import { userService } from "../../services/user.services";
import { mapState } from "vuex";

export default {
  name: "Sidenav",
  components: {},
  data() {
    return {
      loading: false
    };
  },
  computed: {
    ...mapState({
      isHome: state => state.Misc.isHome,
      isAccount: state => state.Misc.isAccount,
      isTransfer: state => state.Misc.isTransfer,
      isFund: state => state.Misc.isFund,
      USER_DATA: state => state.User.USER_DATA
    })
  },
  methods: {
    home() {
      this.$store.dispatch("home");
    },
    account() {
      this.$store.dispatch("account");
    },
    transfer() {
      this.$store.dispatch("transfer");
    },
    fund() {
      this.$store.dispatch("fund");
    },
    async logout() {
      this.loading = true;
      await userService
        .Logout()
        .then(res => {
          this.$toastr.s(res, "Logged out");
          this.$router.push("/Login");
        })
        .catch(err => {
          this.$toastr.e(err, "Failed");
        })
        .finally(() => {
          this.loading = false;
        });
    },
    CapitalizeFirst(str) {
      return str[0].toUpperCase() + str.slice(1);
    }
  },
  mounted() {
    $(".sidebar-dropdown > a").click(function() {
      $(".sidebar-submenu").slideUp(200);
      if (
        $(this)
          .parent()
          .hasClass("active")
      ) {
        $(".sidebar-dropdown").removeClass("active");
        $(this)
          .parent()
          .removeClass("active");
      } else {
        $(".sidebar-dropdown").removeClass("active");
        $(this)
          .next(".sidebar-submenu")
          .slideDown(200);
        $(this)
          .parent()
          .addClass("active");
      }
    });
    //open and close sidenav
    $("#close-sidebar").click(function() {
      $(".page-wrapper").removeClass("toggled");
    });
    $("#show-sidebar").click(function() {
      $(".page-wrapper").addClass("toggled");
    });
  }
};
</script>

<style lang="scss" scoped>
/* sidenav icon text */
.event {
  font: Regular 24px/31px "Source Sans Pro" !important;
  color: #020100 !important;
  opacity: 0.8;
  font-family: "SourceSansPro-Regular";
}

/* logout icon */
.fa-sign-out-alt {
  margin-left: 0px;
}

/* large diamond shape */
.diamond-wrapper {
  position: relative;
  margin-top: -97vh;
  z-index: 1;
  width: 50%;
}

#diamond {
  width: 0;
  height: 0;
  border: 60px solid transparent;
  border-bottom-color: #fbdfd1;
  position: relative;
  top: -60px;
}
#diamond:after {
  content: "";
  position: absolute;
  z-index: 1;
  left: -60px;
  top: 60px;
  width: 0;
  height: 0;
  border: 60px solid transparent;
  border-top-color: #fbdfd1;
}

/* small dianond shape */
.diamond-wrapper-sm {
  position: relative;
  margin-top: -100px;
  display: flex;
  justify-content: flex-end;
  z-index: 1;
  width: 50%;
  float: right;
  padding-right: 15px;
}

#diamond-sm {
  width: 0;
  height: 0;
  border: 20px solid transparent;
  border-bottom-color: #fbdfd1;
  position: relative;
  top: -20px;
}
#diamond-sm:after {
  content: "";
  position: absolute;
  z-index: 1;
  left: -20px;
  top: 20px;
  width: 0;
  height: 0;
  border: 20px solid transparent;
  border-top-color: #fbdfd1;
}

/* active nav item  */
.active {
  background: $main-color !important;
  .event {
    color: white !important;
  }
  i {
    color: $main-color !important;
  }
}
</style>
