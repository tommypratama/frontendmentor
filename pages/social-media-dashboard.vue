<template>
  <div
    class="font-body h-full dark-grayish-blue bg-white dark:bg-dark-400 antialiased animate-mode"
  >
    <div class="pt-10 pb-10 px-6 xl:max-w-1/11 xl:mx-auto">
      <!-- <div class="absolute inset-0 h-64 bg-gray-100 z-0 rounded-b-lg"></div> -->
      <header>
        <h1 class="text-2xl font-bold text-gray-900 dark:text-white">Social Media Dashboard</h1>
        <h4 class="text-sm tracking-wide">Total Followers: 23,004</h4>
        <hr class="mt-6 mb-5" />
        <div class="flex items-center justify-between">
          <span class="text-sm font-bold capitalize">{{ $colorMode.value }} Mode</span>
          <!-- <span v-show="!isDark" class="text-sm font-bold">Light Mode</span> -->
          <button @click="setCurrentTheme" type="button" class="focus:outline-none">
            <icon-toggle-off
              v-if="$colorMode.value === 'light'"
              class="h-8 w-8 text-gray-700 hover:text-gray-900"
            />
            <icon-toggle-on
              v-if="$colorMode.value === 'dark'"
              class="h-8 w-8 text-teal-500 hover:text-teal-700"
            />
          </button>
        </div>
      </header>
      <div class="mt-10 mb-12">
        <div class="md:flex md:flex-wrap md:-m-2">
          <section
            v-for="(follower, index) in followers"
            :key="index"
            class="mt-6 relative md:w-1/3 lg:w-1/5 md:m-2 md:flex-grow flex flex-col justify-center items-center bg-gray-200 py-6 rounded-lg overflow-hidden dark:bg-dark-300"
          >
            <div
              v-if="follower.url === 'facebook'"
              class="absolute inset-0 rounded-lg h-1 bg-blue-600"
            ></div>
            <div
              v-else-if="follower.url === 'twitter'"
              class="absolute inset-0 rounded-lg h-1 bg-blue-500"
            ></div>
            <div
              v-if="follower.url === 'instagram'"
              class="absolute inset-0 rounded-lg h-1 bg-gradient-to-br from-yellow-400 to-orange-600"
            ></div>
            <div
              v-if="follower.url === 'youtube'"
              class="absolute inset-0 rounded-lg h-1 bg-red-800"
            ></div>
            <div class="flex items-center text-sm">
              <icon-facebook v-if="follower.url === 'facebook'" class="h-6 text-blue-600" />
              <icon-twitter v-else-if="follower.url === 'twitter'" class="h-6 text-blue-500" />
              <icon-instagram v-else-if="follower.url === 'instagram'" class="h-6 text-orange-600" />
              <icon-youtube v-else-if="follower.url === 'youtube'" class="h-6 text-red-800" />
              <span class="ml-2 font-bold">{{ follower.username }}</span>
            </div>
            <div class="mt-6 text-center">
              <h2 class="text-5xl font-bold text-gray-900 dark:text-white">{{ follower.total }}</h2>
              <span class="uppercase tracking-widest text-sm">Followers</span>
            </div>
            <div class="mt-6 flex items-center">
              <icon-caret-up
                :class="
								follower.status === 'down'
									? 'transform rotate-180 text-red-500'
									: 'text-teal-500'
							"
                class="h-3"
              />
              <span
                :class="
								follower.status === 'down' ? 'text-red-500' : 'text-teal-500'
							"
                class="ml-1 text-xs font-bold"
              >{{ follower.count }} Today</span>
            </div>
          </section>
        </div>

        <section class="mt-12">
          <h2 class="text-xl font-bold mb-2">Overview - Today</h2>
          <div class="lg:flex lg:-m-2">
            <section v-for="(overview, index) in overviews" :key="index" class="lg:w-1/3 lg:m-2">
              <section class="mt-4 p-6 bg-gray-200 rounded-lg dark:bg-dark-300">
                <div class="flex justify-between">
                  <span class="text-sm font-bold">
                    {{
                    overview.type.type_1.title
                    }}
                  </span>
                  <icon-facebook v-show="overview.url === 'facebook'" class="h-5 text-blue-600" />
                  <icon-twitter v-show="overview.url === 'twitter'" class="h-5 text-blue-500" />
                  <icon-instagram
                    v-show="overview.url === 'instagram'"
                    class="h-5 text-orange-600"
                  />
                  <icon-youtube v-show="overview.url === 'youtube'" class="h-5 text-red-800" />
                </div>
                <div class="mt-6 flex justify-between">
                  <h2
                    class="font-bold text-gray-900 text-3xl dark:text-white"
                  >{{ overview.type.type_1.count }}</h2>
                  <div class="flex items-center">
                    <icon-caret-up
                      :class="
										overview.type.type_1.status === 'down'
											? 'transform rotate-180 text-red-500'
											: 'text-teal-500'
									"
                      class="h-3"
                    />
                    <span
                      :class="
										overview.type.type_1.status === 'down'
											? 'text-red-500'
											: 'text-teal-500'
									"
                      class="ml-1 text-xs font-bold"
                    >{{ overview.type.type_1.percent }}%</span>
                  </div>
                </div>
              </section>

              <section class="mt-4 p-6 bg-gray-200 rounded-lg dark:bg-dark-300">
                <div class="flex justify-between">
                  <span class="text-sm font-bold">
                    {{
                    overview.type.type_2.title
                    }}
                  </span>
                  <icon-facebook v-show="overview.url === 'facebook'" class="h-5 text-blue-600" />
                  <icon-twitter v-show="overview.url === 'twitter'" class="h-5 text-blue-500" />
                  <icon-instagram
                    v-show="overview.url === 'instagram'"
                    class="h-5 text-orange-600"
                  />
                  <icon-youtube v-show="overview.url === 'youtube'" class="h-5 text-red-800" />
                </div>
                <div class="mt-6 flex justify-between">
                  <h2
                    class="font-bold text-gray-900 text-3xl dark:text-white"
                  >{{ overview.type.type_2.count }}</h2>
                  <div class="flex items-center">
                    <icon-caret-up
                      :class="
										overview.type.type_2.status === 'down'
											? 'transform rotate-180 text-red-500'
											: 'text-teal-500'
									"
                      class="h-3"
                    />
                    <span
                      :class="
										overview.type.type_2.status === 'down'
											? 'text-red-500'
											: 'text-teal-500'
									"
                      class="ml-1 text-xs font-bold"
                    >{{ overview.type.type_2.percent }}%</span>
                  </div>
                </div>
              </section>
            </section>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: "Social Media Dashboard",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Home page description",
      },
    ],
    link: [
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap",
      },
    ],
  },
  methods: {
    setCurrentTheme() {
      this.$colorMode.preference =
        this.$colorMode.preference === "dark"
          ? "light"
          : this.$colorMode.preference === "light"
          ? "dark"
          : "light";
    },
    getClasses(color) {
      // Does not set classes on ssr preference is system (because we know them on client-side)
      if (this.$colorMode.unknown) {
        return {};
      }
      return {
        preferred: color === this.$colorMode.preference,
        selected: color === this.$colorMode.value,
      };
    },
  },
  data() {
    return {
      colors: ["system", "light", "dark", "sepia"],
      isDark: false,
      followers: [
        {
          url: "facebook",
          username: "@nathanf",
          total: 1987,
          count: 12,
          status: "up",
        },
        {
          url: "twitter",
          username: "@nathanf",
          total: 1044,
          count: 99,
          status: "up",
        },
        {
          url: "instagram",
          username: "@nathanf",
          total: "11k",
          count: 1099,
          status: "up",
        },
        {
          url: "youtube",
          username: "@nathanf",
          total: 8239,
          count: 144,
          status: "down",
        },
      ],
      overviews: [
        {
          url: "facebook",
          type: {
            type_1: {
              title: "Page Views",
              count: 87,
              percent: 3,
              status: "up",
            },
            type_2: {
              title: "Likes",
              count: 52,
              percent: 2,
              status: "down",
            },
          },
        },
        {
          url: "instagram",
          type: {
            type_1: {
              title: "Likes",
              count: 5462,
              percent: 2257,
              status: "up",
            },
            type_2: {
              title: "Profile Views",
              count: "52k",
              percent: 1375,
              status: "up",
            },
          },
        },
        {
          url: "twitter",
          type: {
            type_1: {
              title: "Retweets",
              count: 117,
              percent: 303,
              status: "up",
            },
            type_2: {
              title: "Likes",
              count: 507,
              percent: 553,
              status: "up",
            },
          },
        },
        {
          url: "youtube",
          type: {
            type_1: {
              title: "Likes",
              count: 107,
              percent: 19,
              status: "down",
            },
            type_2: {
              title: "Profile Views",
              count: 1407,
              percent: 12,
              status: "down",
            },
          },
        },
      ],
    };
  },
};
</script>

<style scoped>
.font-body {
  font-family: "Inter", sans-serif;
}
.dark-grayish-blue {
  color: hsl(228, 12%, 44%);
}
.very-dark-blue {
  color: hsl(230, 17%, 14%);
}
.bg-dark {
  background-color: hsl(230, 17%, 14%);
}
</style>
