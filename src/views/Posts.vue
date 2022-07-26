<template>
  <div class="wrapper">
    <parallax
      class="section page-header header-filter"
      :style="headerStyle"
    ></parallax>
    <div class="main main-raised">
      <div class="section profile-content">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-50 mx-auto">
              <div class="profile">
                <div class="avatar">
                  <img
                    :src="avatars[id].image"
                    alt="Circle Image"
                    class="img-raised rounded-circle img-fluid"
                  />
                </div>
                <div class="name">
                  <h3 class="title">{{ Users.name }}</h3>
                  <h4 class="title">{{ Users.email }}</h4>
                  <h6>Mis Posteos</h6>
                </div>
              </div>
              <PostsList :id="this.id" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PostsList from "../components/PostsList";
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    PostsList
  },
  bodyClass: "profile-page",
  data() {
    return {
      tabPane1: [
        { image: require("@/assets/img/examples/studio-1.jpg") },
        { image: require("@/assets/img/examples/studio-2.jpg") },
        { image: require("@/assets/img/examples/studio-4.jpg") },
        { image: require("@/assets/img/examples/studio-5.jpg") }
      ],
      tabPane2: [
        { image: require("@/assets/img/examples/olu-eletu.jpg") },
        { image: require("@/assets/img/examples/clem-onojeghuo.jpg") },
        { image: require("@/assets/img/examples/cynthia-del-rio.jpg") },
        { image: require("@/assets/img/examples/mariya-georgieva.jpg") },
        { image: require("@/assets/img/examples/clem-onojegaw.jpg") }
      ],
      tabPane3: [
        { image: require("@/assets/img/examples/mariya-georgieva.jpg") },
        { image: require("@/assets/img/examples/studio-3.jpg") },
        { image: require("@/assets/img/examples/clem-onojeghuo.jpg") },
        { image: require("@/assets/img/examples/olu-eletu.jpg") },
        { image: require("@/assets/img/examples/studio-1.jpg") }
      ],
      avatars: [
        { image: require("@/assets/img/faces/fem-01.jpg") },
        { image: require("@/assets/img/faces/fem-02.jpg") },
        { image: require("@/assets/img/faces/fem-03.jpg") },
        { image: require("@/assets/img/faces/fem-04.jpg") },
        { image: require("@/assets/img/faces/fem-05.jpg") },
        { image: require("@/assets/img/faces/mas-01.jpg") },
        { image: require("@/assets/img/faces/mas-02.jpg") },
        { image: require("@/assets/img/faces/mas-03.jpg") },
        { image: require("@/assets/img/faces/fem-06.jpg") },
        { image: require("@/assets/img/faces/fem-07.jpg") }
      ]
    };
  },
  props: {
    header: {
      type: String,
      default: require("@/assets/img/city-profile.jpg")
    },
    img: {
      type: String,
      default: require("@/assets/img/faces/christian.jpg")
    },
    id: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapGetters(["Users"]),
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  },
  async created() {
    this.fetch1User(this.id);
  },
  methods: {
    ...mapActions(["fetch1User"])
  }
};
</script>

<style lang="scss" scoped>
.section {
  padding: 0;
}

.profile-tabs::v-deep {
  .md-card-tabs .md-list {
    justify-content: center;
  }

  [class*="tab-pane-"] {
    margin-top: 3.213rem;
    padding-bottom: 50px;

    img {
      margin-bottom: 2.142rem;
    }
  }
}
</style>
