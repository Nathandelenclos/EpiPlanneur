<script lang="ts">
import RoadBlock from "@/components/RoadBlock.vue";
import roadBlock from "../components/RoadBlock.vue";
export default {
  name: "HomeView",
  computed: {
    roadBlock() {
      return roadBlock
    }
  },
  components: { RoadBlock },
  data() {
    return {
      roadBlock: [
        {
          title: "Foundation (8req)",
          require: 8,
          colors: {
            "--primary-bg": "#4472c4",
            "--secondary-bg": "#b4c6e7",
            "--third-bg": "#d9e1f2",
          },
          modules: [
            {
              title: "B-CCP-500",
              credit: 6,
            },
            {
              title: "B-DEV-500",
              credit: 6,
            },
            {
              title: "B-FUN-500",
              credit: 6,
            },
          ],
        },
        {
          title: "Supplement (6req)",
          require: 6,
          colors: {
            "--primary-bg": "#5b9bd5",
            "--secondary-bg": "#bdd7ee",
            "--third-bg": "#ddebf7",
          },
          modules: [
            {
              title: "B-AIA-500",
              credit: 3,
            },
            {
              title: "B-DOP-500",
              credit: 3,
            },
            {
              title: "B-CNA-500",
              credit: 3,
            },
            {
              title: "B-SEC-500",
              credit: 3,
            },
          ],
        },
        {
          title: "Innovation (6req)",
          require: 6,
          colors: {
            "--primary-bg": "#70ad47",
            "--secondary-bg": "#c6e0b4",
            "--third-bg": "#e2efda",
          },
          modules: [
            {
              title: "B-INN-500",
              credit: 8,
              isChangeable: true,
            },
            {
              title: "B-JAM-001",
              credit: 1,
            },
            {
              title: "B-CUS-00x",
              credit: 2,
            },
            {
              title: "B-PRO-500",
              credit: 7,
            },
          ],
        },
        {
          title: "Soft Skills (4req)",
          require: 4,
          colors: {
            "--primary-bg": "#ed7d31",
            "--secondary-bg": "#f8cbad",
            "--third-bg": "#fce4d6",
          },
          modules: [
            {
              title: "B-PCP-000",
              credit: 2,
            },
            {
              title: "B-DES-500",
              credit: 2,
            },
            {
              title: "B-SVR-500",
              credit: 3,
            },
            {
              title: "B-PRO-510",
              credit: 2,
            },
          ],
        },
      ],
      grandTotal: 0,
    };
  },
  methods: {
    updateGrandTotal({ credit, isSelected }) {
      if (!isSelected) {
        this.grandTotal -= +credit;
        return;
      }
      this.grandTotal += +credit;
    },
  },
};

</script>

<template>
  <h1>Tek3</h1>
  <div class="home">
    <RoadBlock
      v-for="(road, index) in roadBlock"
      :key="index"
      class="roadblock"
      :title="road.title"
      :modules="road.modules"
      :require-credit="road.require"
      :colors="road.colors"
      @select="updateGrandTotal"
    />
  </div>
  <p class="center">Total Credit: {{ grandTotal }}</p>
</template>

<style scoped>
h1 {
  width: 100%;
  text-align: center;
}
.home {
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
}

.center {
  text-align: center;
  width: 100%;
  font-size: 1.5rem;
  font-weight: bold;
}

.roadblock {
  margin-bottom: 50px;
}
</style>
