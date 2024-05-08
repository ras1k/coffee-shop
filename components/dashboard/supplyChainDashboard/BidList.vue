<script setup></script>
<template>
  <div>
    <div class="py-6">
      <div class="flex justify-between items-center pt-4">
        <p class="text-2xl text-orange-400 font-bold pb-2">Bid List</p>
      </div>
      <hr />
      <div class="grid grid-cols-1 gap-5 my-5">
        <div
          class="rounded-md px-2 py-3 flex gap-5 justify-between bg-gray-700 shadow-md items-center"
        >
          <table class="table-auto w-full">
            <thead>
              <tr class="bg-gray-600 text-xl">
                <th class="p-2 text-left">Bid Id</th>
                <th class="p-2 text-left">Project Name</th>
                <th class="p-2 text-left">Project Completion Timeframe</th>
                <th class="p-2 text-left">Budget</th>
                <th class="p-2 text-left">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr class="">
                <td class="py-4 p-2 gap-2">
                  <h3 class="font-bold">01</h3>
                </td>
                <td class="py-4 p-2 flex items-center gap-2">
                  <img src="@/assets/img/avatar.webp" alt="" class="h-10" />
                  <h3 class="font-semibold">Sound System</h3>
                </td>
                <td class="py-4 p-2">6 months</td>
                <td class="py-4 p-2 font-semibold">$ 5000</td>
                <td class="py-4 p-2">
                  <button
                    class="px-3 py-2 rounded-md shadow-md bg-cyan-600 text-white text-sm"
                  >
                    <Dialog>
                      <DialogTrigger> Details </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>
                            <div class="text-xl mb-2">
                              <span class="font-bold">Project Name:</span> Sound
                              System
                            </div>
                          </DialogTitle>
                          <DialogDescription>
                            <img src="@/assets/img/avatar.webp" alt="" />
                            <div>
                              <h1 class="font-semibold mt-2 text-l text-black">
                                Project Description:
                              </h1>
                              Streamline the proposal process and save time by
                              using a pre-designed template Clearly outline the
                              scope, objectives, and deliverables of your sound
                              system project Present a professional and
                              organized proposal that will impress clients and
                              stakeholders Include all necessary details such as
                              budget, timeline, and resources required Increase
                              your chances of winning the project by presenting
                              a well-structured and persuasive proposal
                            </div>
                            <div
                              class="flex mt-2 gap-5 items-center justify-between"
                            >
                              <div class="flex gap-2">
                                <h1 class="text-black font-semibold">
                                  Project Budget:
                                </h1>
                                $ 5000
                              </div>
                              <div class="flex gap-2">
                                <h1 class="text-black font-semibold">
                                  Completion Timeframe:
                                </h1>
                                6 months
                              </div>
                            </div>
                            <div>
                              <h1 class="font-semibold mt-2 text-l text-black">
                                Terms &amp; Conditions:
                              </h1>
                              1. Right to make changes to the agreement. <br />
                              2. Warranty disclaimer.
                            </div>
                          </DialogDescription>
                        </DialogHeader>
                      </DialogContent>
                    </Dialog>
                  </button>
                </td>
              </tr>
              <tr class="bg-gray-600">
                <td class="py-4 p-2 gap-2">
                  <h3 class="font-bold">02</h3>
                </td>
                <td class="py-4 p-2 flex items-center gap-2">
                  <img src="@/assets/img/avatar.webp" alt="" class="h-10" />
                  <h3 class="font-semibold">Computer, Printer, Camera</h3>
                </td>
                <!-- <td>
                  <p class="text-lg">Dallas Electronics</p>
                </td> -->
                <td class="py-4 p-2">6 months</td>
                <!-- <td class="py-4 p-2">10 Feb 2024</td> -->
                <td class="py-4 p-2 font-semibold">$ 5000</td>
                <!-- <td class="py-4 p-2">
                  <p class="text-sm font-bold text-green-600">Completed</p>
                </td> -->
                <td class="py-4 p-2">
                  <button
                    class="px-3 py-2 rounded-md shadow-md bg-cyan-600 text-white text-sm"
                  >
                    <Dialog>
                      <DialogTrigger> Details </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>
                            <div class="text-xl mb-2">
                              <span class="font-bold">Project Name:</span>
                              Computer, Printer, Camera
                            </div>
                          </DialogTitle>
                          <DialogDescription>
                            <img src="@/assets/img/avatar.webp" alt="" />
                            <div>
                              <h1 class="font-semibold mt-2 text text-black">
                                Project Description:
                              </h1>
                              Printers are programmed using a programming
                              language. The printer interprets the program, and
                              the outputs the result. There are two big classes
                              of such languages: Page description languages, and
                              Printer Control languages.
                            </div>
                            <div
                              class="flex gap-5 items-center justify-between"
                            >
                              <div class="flex gap-2">
                                <h1 class="text-black font-semibold">
                                  Budget:
                                </h1>
                                $ 5000
                              </div>
                              <div class="flex gap-2">
                                <h1 class="text-black font-semibold">
                                  Completion Timeframe:
                                </h1>
                                6 months
                              </div>
                            </div>
                            <div>
                              <h1 class="font-semibold mt-2 text-l text-black">
                                Terms &amp; Conditions:
                              </h1>
                              1. Right to make changes to the agreement. <br />
                              2. Warranty disclaimer.
                            </div>
                          </DialogDescription>
                        </DialogHeader>
                      </DialogContent>
                    </Dialog>
                  </button>
                </td>
              </tr>
              <tr class="">
                <td class="py-4 p-2">
                  <h3 class="font-bold">03</h3>
                </td>
                <td class="py-4 p-2 flex items-center gap-2">
                  <img src="@/assets/img/avatar.webp" alt="" class="h-10" />
                  <h3 class="font-semibold">Sound System</h3>
                </td>
                <td class="py-4 p-2">6 months</td>
                <td class="py-4 p-2 font-semibold">$ 500</td>
                <td class="py-4 p-2">
                  <button
                    class="px-3 py-2 rounded-md shadow-md bg-cyan-600 text-white text-sm"
                  >
                    <!-- <Dialog>
                      <DialogTrigger> Details </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>
                            <div class="font-bold text-xl mb-2">Save The Children</div>
                          </DialogTitle>
                          <DialogDescription>
                            <img src="../../assets/image/hungry/hungry-2.jpg" alt="" />
                            <div>
                              <h1 class="font-semibold mt-2 text-lg text-black">Description</h1>
                              In our noble mission, we strive to alleviate hunger and nourish
                              the vulnerable in our community. Committed to the values of
                              compassion and social responsibility, we dedicate ourselves to
                              feeding those in need. Every day, we work tirelessly to provide
                              nutritious meals, ensuring that no one goes to bed hungry. Our
                              initiative goes beyond immediate relief, aiming to empower
                              individuals and build sustainable solutions for long-term food
                              security. With the support of our dedicated team and generous
                              community, we envision a future where hunger is eradicated,
                              fostering a world where every person has access to the fundamental
                              right of wholesome sustenance and the hope for a brighter tomorrow
                            </div>
                            <div class="flex gap-5 items-center justify-between mt-2">
                              <div>
                                <span class="text-black font-semibold">Starting Date:</span> 1
                                Jan 2024
                              </div>
                              <div>
                                <span class="text-black font-semibold">Ending Date:</span> 10
                                Feb 2024
                              </div>
                            </div>
                            <div class="flex gap-5 items-center justify-between">
                              <div class="flex gap-2">
                                <h1 class="text-black font-semibold">Location:</h1>
                                Masjid Premises
                              </div>
                              <div class="flex gap-2">
                                <h1 class="text-black font-semibold">Time:</h1>
                                4 PM
                              </div>
                            </div>
                          </DialogDescription>
                        </DialogHeader>
                      </DialogContent>
                    </Dialog> -->
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
