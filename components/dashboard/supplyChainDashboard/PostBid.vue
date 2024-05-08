<script setup></script>
<template>
  <div>
    <div class="py-4">
      <div class="flex justify-between items-center pt-4">
        <p class="text-2xl text-orange-400 font-bold pb-2">Post Bid List</p>
      </div>
      <hr />
      <div
        class="rounded-md px-2 py-3 mt-4 flex gap-5 justify-between bg-gray-700 shadow-md items-center"
      >
        <table class="table-auto w-full">
          <thead>
            <tr class="bg-gray-600 text-sm">
              <th class="p-2 text-left">Bid Id</th>
              <th class="p-2 text-left">Bid Title</th>
              <th class="p-2 text-left">Post Date From</th>
              <th class="p-2 text-left">Post Date To</th>
              <th class="p-2 text-left">Bid Submission Deadline</th>
              <th class="p-2 text-left">Bid Submission Link</th>
              <th class="p-2 text-left">Details</th>
              <th class="p-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr class="">
              <td class="py-4 p-2 gap-2">
                <h3 class="font-bold">01</h3>
              </td>
              <td class="py-6 p-2 flex items-center gap-2">
                <!-- <img src="/src/assets/image/home/l4.jpg" alt="" class="h-10" /> -->
                <h3 class="font-bold">Sound System</h3>
              </td>
              <td class="py-4 p-2">1 Jan 2024</td>
              <td class="py-4 p-2">1 Feb 2024</td>
              <td class="py-4 p-2">
                <input
                  type="date"
                  class="peer block min-h-[auto] rounded-lg border-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none text-black"
                  id="exampleFormControlInput50"
                  value=""
                />
              </td>
              <td class="py-4 p-2">
                <input
                  type="text"
                  class="peer block min-h-[auto] rounded-lg border-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none text-black"
                  id="exampleFormControlInput50"
                  placeholder="A Link"
                />
              </td>

              <td class="py-4 p-2">
                <button
                  class="px-3 py-2 rounded-md shadow-md bg-cyan-600 text-white text-sm"
                >
                  <!-- <Dialog>
                    <DialogTrigger> Details </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>
                          <div class="text-xl mb-2">
                            <span class="font-bold">Project Name: </span>Sound System
                          </div>
                        </DialogTitle>
                        <DialogDescription>
                          <img src="/src/assets/image/home/l4.jpg" alt="" />
                          <div>
                            <h1 class="font-semibold mt-2 text-lg text-black">
                              Project Description:
                            </h1>
                            Streamline the proposal process and save time by using a
                            pre-designed template Clearly outline the scope, objectives, and
                            deliverables of your sound system project Present a professional and
                            organized proposal that will impress clients and stakeholders
                            Include all necessary details such as budget, timeline, and
                            resources required Increase your chances of winning the project by
                            presenting a well-structured and persuasive proposal
                          </div>
                          <div class="flex mt-2 gap-5 items-center justify-between">
                            <div class="flex gap-2">
                              <h1 class="text-black font-semibold">Project Budget:</h1>
                              $ 5000
                            </div>
                            <div class="flex gap-2">
                              <h1 class="text-black font-semibold">Completion Timeframe:</h1>
                              6 months
                            </div>
                          </div>
                          <div class="flex gap-5 items-center justify-between mt-2">
                            <div>
                              <span class="text-black font-semibold">Post Date From:</span> 1
                              Jan 2024
                            </div>
                            <div>
                              <span class="text-black font-semibold">Post Date To:</span> 10 Feb
                              2024
                            </div>
                          </div>
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog> -->
                </button>
              </td>
              <td class="py-4 p-2">
                <Select>
                  <SelectTrigger class="w-full">
                    <SelectValue placeholder="Select one" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="Comfort The Sick"> Post </SelectItem>
                      <SelectItem value="Educate The Children">
                        Withdrawal
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </td>
            </tr>
            <tr class="bg-gray-600">
              <td class="py-4 p-2 gap-2">
                <h3 class="font-bold">02</h3>
              </td>
              <td class="py-6 p-2 flex items-center gap-2">
                <h3 class="font-bold">Computer, Printer, Camera</h3>
              </td>
              <td class="py-4 p-2">1 Jan 2024</td>
              <td class="py-4 p-2">10 Feb 2024</td>
              <td class="py-4 p-2">
                <input
                  type="date"
                  class="peer block min-h-[auto] rounded-lg border-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none text-black"
                  id="exampleFormControlInput50"
                  value=""
                />
              </td>
              <td class="py-4 p-2">
                <input
                  type="text"
                  class="peer block min-h-[auto] rounded-lg border-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none text-black"
                  id="exampleFormControlInput50"
                  placeholder="A Link"
                />
              </td>
              <td class="py-4 p-2">
                <button
                  class="px-3 py-2 rounded-md shadow-md bg-cyan-600 text-white text-sm"
                >
                  <!-- <Dialog>
                    <DialogTrigger> Details </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>
                          <div class="text-xl mb-2">
                            <span class="font-bold">Project Name: </span>Computer, Printer,
                            Camera
                          </div>
                        </DialogTitle>
                        <DialogDescription>
                          <img src="/src/assets/image/home/l4.jpg" alt="" />
                          <div>
                            <h1 class="font-semibold mt-2 text-lg text-black">
                              Project Description:
                            </h1>
                            Printers are programmed using a programming language. The printer
                            interprets the program, and the outputs the result. There are two
                            big classes of such languages: Page description languages, and
                            Printer Control languages.
                          </div>
                          <div class="flex gap-5 items-center justify-between">
                            <div class="flex gap-2">
                              <h1 class="text-black font-semibold">Project Budget:</h1>
                              $ 5000
                            </div>
                            <div class="flex gap-2">
                              <h1 class="text-black font-semibold">Completion Timeframe:</h1>
                              6 months
                            </div>
                          </div>
                          <div class="flex gap-5 items-center justify-between mt-2">
                            <div>
                              <span class="text-black font-semibold">Post Date From:</span> 1
                              Jan 2024
                            </div>
                            <div>
                              <span class="text-black font-semibold">Post Date To:</span> 10 Feb
                              2024
                            </div>
                          </div>
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog> -->
                </button>
              </td>
              <td class="py-4 p-2">
                <Select>
                  <SelectTrigger class="w-full">
                    <SelectValue placeholder="Select one" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <!-- <SelectLabel>Select</SelectLabel> -->
                      <SelectItem value="Comfort The Sick"> Post </SelectItem>
                      <SelectItem value="Educate The Children">
                        Withdrawal
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
