<template>
  <div class="">
    <div
      class="w-9/12 m-auto py-16 min-h-screen flex items-center justify-center"
    >
      <div class="overflow-hidden sm:rounded-lg pb-8 p-10 lg:w-5/6 flex items-center lg:justify-center">
        <div class="pt-8">
          <h1 class="pl-3 text-9xl font-bold text-[#fa8b8b]">500</h1>
          <h1 class="pl-3 text-gray-800 font-bold text-2xl">
            500 internal error of the server
          </h1>
          <p class="pl-3 text-gray-800">
            The WEB server cannot perform this request. Please retry this request later.If the problem persists, contact the administrator of your Web server.
          </p>


          <div class="pl-3">
            <n-button
              size="medium"
              color="#fa8b8b"
              class="sm:w-full lg:w-auto my-2 border rounded md py-4 px-8 text-center text-white focus:ring-opacity-50"
              >Home Page</n-button
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.text-9xl {
  font-size: 14rem;
}
@media (max-width: 645px) {
  .text-9xl {
    font-size: 5.75rem;
  }
  .text-6xl {
    font-size: 1.75rem;
  }
  .text-2xl {
    font-size: 1rem;
    line-height: 1.2rem;
  }
  .py-8 {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  .px-6 {
    padding-left: 1.2rem;
    padding-right: 1.2rem;
  }
  .mr-6 {
    margin-right: 0.5rem;
  }
  .px-12 {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}
</style>
