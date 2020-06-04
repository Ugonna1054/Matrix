<template>
  <div class="main-container">
    <Loader :loading="loading" loading-text="please wait..." />
    <div class="create-user">
      <div class="user-title mb-3 px-3">Loan Application Form</div>

      <div class="col user-title p-0">
        <b-tabs pills card :active-nav-item-class="current">
          <!-- Personal Information -->
          <!-- <b-tab :title-link-class="active1" title="Personal Information">
            <ValidationObserver v-slot="{ passes }">
              <form @submit.prevent="passes(next_page)">
                <div class="tab-contents">
                  <div>
                    <div class="row">
                      <div class="col-md-7 borde">
                        <div class="mb-3">
                          <ValidationProvider
                            name="address"
                            rules="required"
                            v-slot="{ errors }"
                          >
                            <label for="v"
                              >Current Address
                              <span class="text-danger">*</span></label
                            >
                            <div class="input-group">
                              <textarea
                                type="text"
                                v-model="address"
                                class="form-control"
                                placeholder=""
                                rows="3"
                                name="address"
                              >
                              </textarea>
                            </div>
                            <span style="font-size:13px; color:red">
                              <span v-if="errors[0]"
                                ><i class="fas fa-ban"></i
                              ></span>
                              {{ errors[0] }}</span
                            >
                          </ValidationProvider>
                        </div>
                        <div
                          class="div2i mb-3"
                          v-if="currentRoute != 'investment'"
                        >
                          <ValidationProvider
                            name="busstop"
                            rules="required"
                            v-slot="{ errors }"
                          >
                            <label for="v"
                              >Nearest Bus-Stop
                              <span class="text-danger">*</span></label
                            >
                            <div class="input-group">
                              <input
                                type="text"
                                v-model="busstop"
                                class="form-control"
                                placeholder=""
                                name="busstop"
                              />
                            </div>
                            <span style="font-size:13px; color:red">
                              <span v-if="errors[0]"
                                ><i class="fas fa-ban"></i
                              ></span>
                              {{ errors[0] }}</span
                            >
                          </ValidationProvider>
                        </div>
                        <div
                          class="div3i mb-3"
                          v-if="currentRoute != 'investment'"
                        >
                          <ValidationProvider
                            name="yearsInAddress"
                            rules="required"
                            v-slot="{ errors }"
                          >
                            <label for="v"
                              >Years lived in address
                              <span class="text-danger">*</span></label
                            >
                            <div class="input-group">
                              <input
                                type="text"
                                v-model="yearsInAddress"
                                class="form-control"
                                placeholder=""
                                name="yearsInAddress"
                              />
                            </div>
                            <span style="font-size:13px; color:red">
                              <span v-if="errors[0]"
                                ><i class="fas fa-ban"></i
                              ></span>
                              {{ errors[0] }}</span
                            >
                          </ValidationProvider>
                        </div>
                        <div
                          class="div3i mb-3"
                          v-if="currentRoute == 'investment'"
                        >
                          <ValidationProvider
                            name="occupation"
                            rules="required"
                            v-slot="{ errors }"
                          >
                            <label for="v"
                              >Occupation
                              <span class="text-danger">*</span></label
                            >
                            <div class="input-group">
                              <input
                                type="text"
                                v-model="occupation"
                                class="form-control"
                                placeholder=""
                                name="occupation"
                              />
                            </div>
                            <span style="font-size:13px; color:red">
                              <span v-if="errors[0]"
                                ><i class="fas fa-ban"></i
                              ></span>
                              {{ errors[0] }}</span
                            >
                          </ValidationProvider>
                        </div>
                        <div class="div4i mb-3">
                          <ValidationProvider
                            name="state"
                            rules="required"
                            v-slot="{ errors }"
                          >
                            <label for="" class="d-inline"
                              >State <span class="text-danger">*</span></label
                            >
                            <select
                              name="state"
                              :selected="statee"
                              v-model="state"
                              id="state"
                              class="browser-default custom-select"
                            >
                              <option value="">Choose State</option>
                              <option value="Lagos">Lagos</option>
                              <option value="Abia">Abia</option>
                              <option value="Adamawa">Adamawa</option>
                              <option value="AkwaIbom">AkwaIbom</option>
                              <option value="Anambra">Anambra</option>
                              <option value="Bauchi">Bauchi</option>
                              <option value="Bayelsa">Bayelsa</option>
                              <option value="Benue">Benue</option>
                              <option value="Borno">Borno</option>
                              <option value="Cross River">Cross River</option>
                              <option value="Delta">Delta</option>
                              <option value="Ebonyi">Ebonyi</option>
                              <option value="Edo">Edo</option>
                              <option value="Ekiti">Ekiti</option>
                              <option value="Enugu">Enugu</option>
                              <option value="FCT">FCT</option>
                              <option value="Gombe">Gombe</option>
                              <option value="Imo">Imo</option>
                              <option value="Jigawa">Jigawa</option>
                              <option value="Kaduna">Kaduna</option>
                              <option value="Kano">Kano</option>
                              <option value="Katsina">Katsina</option>
                              <option value="Kebbi">Kebbi</option>
                              <option value="Kogi">Kogi</option>
                              <option value="Kwara">Kwara</option>
                              <option value="Lagos">Lagos</option>
                              <option value="Nasarawa">Nasarawa</option>
                              <option value="Niger">Niger</option>
                              <option value="Ogun">Ogun</option>
                              <option value="Ondo">Ondo</option>
                              <option value="Osun">Osun</option>
                              <option value="Oyo">Oyo</option>
                              <option value="Plateau">Plateau</option>
                              <option value="Rivers">Rivers</option>
                              <option value="Sokoto">Sokoto</option>
                              <option value="Taraba">Taraba</option>
                              <option value="Yobe">Yobe</option>
                              <option value="Zamfara">Zamafara</option>
                            </select>
                            <span style="font-size:13px; color:red"
                              >Lagos residents only</span
                            >
                            <br />
                            <span style="font-size:13px; color:red">
                              <span v-if="errors[0]"
                                ><i class="fas fa-ban"></i
                              ></span>
                              {{ errors[0] }}</span
                            >
                          </ValidationProvider>
                        </div>
                        <div class="div5i mb-3">
                          <ValidationProvider
                            name="meansOfId"
                            rules="required"
                            v-slot="{ errors }"
                          >
                            <label for=""
                              >Means of Identification
                              <span class="text-danger">*</span></label
                            >
                            <select
                              name="meansOfId"
                              @change="checkInput"
                              v-model="meansOfId"
                              id="meansOfId"
                              class="browser-default custom-select"
                            >
                              <option value="International Passport"
                                >International Passport</option
                              >
                              <option value="Voter's Card">Voter's Card</option>
                              <option value="National (NIMC) ID CARD"
                                >National (NIMC) ID CARD</option
                              >
                              <option value="Driver's License"
                                >Driver's License</option
                              >
                              <option value="Official ID Card"
                                >Official ID Card</option
                              >
                              <option value="Others (please specify)"
                                >Others (please specify)</option
                              >
                            </select>
                            <span style="font-size:13px; color:red">
                              <span v-if="errors[0]"
                                ><i class="fas fa-ban"></i
                              ></span>
                              {{ errors[0] }}</span
                            >
                          </ValidationProvider>
                        </div>
                        <div class="div6i mb-3" v-if="others">
                          <ValidationProvider
                            name="otherId"
                            rules="required"
                            v-slot="{ errors }"
                          >
                            <label for="v"
                              >Other ID Name
                              <span class="text-danger">*</span></label
                            >
                            <div class="input-group">
                              <input
                                type="text"
                                v-model="otherId"
                                class="form-control"
                                placeholder=""
                                name="Loan Amount"
                              />
                            </div>
                            <span style="font-size:13px; color:red">
                              <span v-if="errors[0]"
                                ><i class="fas fa-ban"></i
                              ></span>
                              {{ errors[0] }}</span
                            >
                          </ValidationProvider>
                        </div>
                      </div>
                      <div class="col-md-5  borde">
                        <div class="row">
                          <div class="col-md-3"></div>
                          <div class="col-md-9">
                            <div class="div1 mb-5">
                              <span class="mt-md-n4 mb-md-3"
                                >ID Attachment
                                <span class="text-danger">*</span>
                              </span>
                              <div
                                class=" mb-4 mb-md-0 "
                                style="height:105px; width:170px;  border:1px solid blue"
                              >
                                <img
                                  style="max-width:100%; height:100px; width:auto"
                                  class="img-fluid"
                                  :src="loanId"
                                  alt=""
                                />
                              </div>
                              <span style="font-size:13px; color:red"
                                >maximum file size : 2mb</span
                              >

                              <div class="input-group mt-2">
                                <ValidationProvider
                                  name="idCard"
                                  rules="required|image|size:2000"
                                  v-slot="{ validate, errors }"
                                >
                                  <label class="btn ml-n1 btn-info btn-file">
                                    BROWSE
                                    <input
                                      type="file"
                                      class=" mt-3 mt-md-0 mb-2 mb-md-1 small-screen-id"
                                      style="display:none"
                                      @change="
                                        onFileChange($event);
                                        validate($event);
                                      "
                                      name="idCard"
                                      id="id"
                                    />
                                  </label>
                                  <br />
                                  <span style="font-size:13px; color:red">
                                    <span v-if="errors[0]"
                                      ><i class="fas fa-ban"></i
                                    ></span>
                                    {{ errors[0] }}</span
                                  >
                                </ValidationProvider>
                              </div>
                            </div>
                            <div class="div2">
                              <span class="mt-md-n4 mb-md-3"
                                >Signature <span class="text-danger">*</span>
                              </span>
                              <div
                                class=" mb-4 mb-md-0 "
                                style="height:105px; width:170px; border:1px solid blue"
                              >
                                <img
                                  style="max-width:100%; height:100px;width:auto "
                                  class="img-fluid"
                                  :src="loanSign"
                                  alt=""
                                />
                              </div>
                              <span style="font-size:13px; color:red"
                                >maximum file size : 2mb</span
                              >

                              <div class="input-group mr-2 mt-2">
                                <ValidationProvider
                                  name="signature"
                                  rules="required|image|size:2000"
                                  v-slot="{ validate, errors }"
                                >
                                  <label class="btn ml-n1 btn-info btn-file">
                                    BROWSE
                                    <input
                                      type="file"
                                      class=" mt-3 mt-md-0 mb-2 mb-md-1 small-screen-id"
                                      @change="
                                        onFileChange1($event);
                                        validate($event);
                                      "
                                      style="display:none"
                                      name="signature"
                                      id="signature"
                                    />
                                  </label>
                                  <br />
                                  <span style="font-size:13px; color:red">
                                    <span v-if="errors[0]"
                                      ><i class="fas fa-ban"></i
                                    ></span>
                                    {{ errors[0] }}</span
                                  >
                                </ValidationProvider>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="d-flex mt-3 justify-content-between">
                  <button @click="$router.go(-1)" class="btn btn-info">
                    Previous
                  </button>
                  <button type="submit" class="btn btn-info">Next</button>
                </div>
              </form>
            </ValidationObserver>
          </b-tab>-->

          <!-- Loan Details -->
          <b-tab :title-link-class="active1" title="Loan Details">
            <ValidationObserver v-slot="{ passes }">
              <form @submit.prevent="passes(postLoan)">
                <div class="tab-content">
                  <div class="form-row first">
                    <div class="col-md-5 mb-3">
                      <ValidationProvider
                        name="principal"
                        rules="required|min_value:1000|max_value:1000000"
                        v-slot="{ errors }"
                      >
                        <label for="v">
                          Loan Amount
                          <span class="text-danger">*</span>
                        </label>
                        <div class="input-group">
                          <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroupPrepend">&#8358;</span>
                          </div>
                          <vue-numeric
                            v-model="amount"
                            class="form-control"
                            name="Loan Amount"
                            placeholder="0"
                            separator=","
                          ></vue-numeric>
                        </div>
                        <!-- <span class="text-danger" style="font-size:15px"
                          >(min: &#8358;100,000 max: &#8358;3,000,000)</span
                        >-->
                        <br />
                        <span style="font-size:13px; color:red">
                          <span v-if="errors[0]">
                            <i class="fas fa-ban"></i>
                          </span>
                          {{ errors[0] }}
                        </span>
                      </ValidationProvider>
                    </div>

                    <div class="col-md-2"></div>

                    <div class="col-md-5 mb-3">
                      <label for="validationCustom02">
                        Loan Tenor
                        <span class="text-danger">*</span>
                      </label>
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span
                            class="input-group-text"
                            style="cursor:pointer"
                            v-on:click="minus"
                            id="inputGroupPrepend"
                          >-</span>
                        </div>
                        <input
                          type="text"
                          class="form-control"
                          style="background:whitesmoke"
                          disabled
                          v-model.number="tenor"
                          id="validationCustom02"
                          placeholder="Duration (months)"
                          required
                        />
                        <div class="input-group-append">
                          <span
                            class="input-group-text"
                            style="cursor:pointer"
                            v-on:click="plus"
                            id="inputGroupPrepend"
                          >+</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- <div class="form-row second">
                    <div class="col-md-5 mt-3 mb-3">
                      Any Indebtedness? <span class="text-danger">*</span>
                      <br class="d-block d-sm-none" />
                      <ValidationProvider
                        name=""
                        rules="required"
                        v-slot="{ errors }"
                      >
                        <div class="custom-control custom-radio ml-2 d-inline">
                          <input
                            type="radio"
                            v-model="isPicked"
                            value="yes"
                            class="custom-control-input form-check-input"
                            id="invalidCheck"
                            name="indebtedness"
                          />
                          <label class="custom-control-label" for="invalidCheck"
                            >Yes</label
                          >
                        </div>

                        <div class="custom-control custom-radio ml-2 d-inline">
                          <input
                            type="radio"
                            v-model="isPicked"
                            value="no"
                            class="custom-control-input"
                            id="customControlValidation3"
                            name="indebtedness"
                          />
                          <label
                            class="custom-control-label"
                            for="customControlValidation3"
                            >No</label
                          >
                        </div>
                        <br />
                        <span style="font-size:13px; color:red">
                          <span v-if="errors[0]"
                            ><i class="fas fa-ban"></i
                          ></span>
                          {{ errors[0] }}</span
                        >
                      </ValidationProvider>
                    </div>

                    <div class="col-md-2"></div>

                    <div class="col-md-5 mb-3">
                      <ValidationProvider
                        name="Repayment Mode"
                        rules="required"
                        v-slot="{ errors }"
                      >
                        <span class="m"
                          >Repayment Mode
                          <span class="text-danger">*</span></span
                        >
                        <select
                          class="browser-default custom-select"
                          v-model="repaymentMode"
                          name="Repayment Mode"
                        >
                          <option value="Bank-Transfer">Bank Transfer</option>
                          <option value="Direct-Debit">Direct Debit</option>
                          <option value="Postdated-Cheques"
                            >Postdated Cheques</option
                          >
                        </select>
                        <span style="font-size:13px; color:red">
                          <span v-if="errors[0]"
                            ><i class="fas fa-ban"></i
                          ></span>
                          {{ errors[0] }}</span
                        >
                      </ValidationProvider>
                    </div>
                  </div>-->

                  <div class="form-row third mb-3">
                    <!-- <div class="col-md-5 mb-3 mt-3" v-if="isPickedd">
                      <ValidationProvider
                        name="Loan Indebtedness"
                        rules="required"
                        v-slot="{ errors }"
                      >
                        <label for="exampleFormControlTextarea1"
                          >List Indebtednes <span class="text-danger">*</span>
                        </label>
                        <textarea
                          v-model="loanIndebtedness"
                          name="Loan Indebtedness"
                          class="form-control text-area"
                          id="exampleFormControlTextarea1"
                          rows="3"
                        ></textarea>
                        <span style="font-size:13px; color:red">
                          <span v-if="errors[0]"
                            ><i class="fas fa-ban"></i
                          ></span>
                          {{ errors[0] }}</span
                        >
                      </ValidationProvider>
                    </div>-->

                    <!-- <div class="col-md-5 mt-2" >
                      <ValidationProvider
                        name="loanPurpose"
                        rules="required"
                        v-slot="{ errors }"
                      >
                        <label for="exampleFormControlTextarea1"
                          >Loan Purpose
                          <span class="text-danger">*</span></label
                        >
                        <textarea
                          v-model="loanPurpose"
                          name="loanPurpose"
                          class="form-control text-area"
                          id="exampleFormControlTextarea1"
                          rows="3"
                        ></textarea>
                        <span style="font-size:13px; color:red">
                          <span v-if="errors[0]"
                            ><i class="fas fa-ban"></i
                          ></span>
                          {{ errors[0] }}</span
                        >
                      </ValidationProvider>
                    </div>-->
                  </div>

                  <div class="form-row">
                    <div class="col-md-5 mb-3">
                      <ValidationProvider
                        name="Account_Number"
                        rules="required|numeric|min:10|max:10"
                        v-slot="{ errors }"
                      >
                        <label for class="d-inline">
                          Account Number
                          <span class="text-danger">*</span>
                        </label>
                        <input
                          disabled
                          name="Account_Number"
                          v-model="account"
                          type="text"
                          class="form-control"
                        />
                        <span style="font-size:13px; color:red">
                          <span v-if="errors[0]">
                            <i class="fas fa-ban"></i>
                          </span>
                          {{ errors[0] }}
                        </span>
                      </ValidationProvider>
                    </div>

                    <div class="col-md-2"></div>

                    <div class="col-md-5">
                      <ValidationProvider name="Bank_Name" rules="required" v-slot="{ errors }">
                        <label for class="d-inline">
                          Bank
                          <span class="text-danger">*</span>
                        </label>
                        <select
                          class="browser-default custom-select"
                          name="Bank_Name"
                          v-model="bank"
                        >
                          <option>Choose</option>
                          <option selected value="asset matrix">Asset Matrix</option>
                          <!-- <option value="citibank">Citibank</option>
                          <option value="ecobank">Ecobank</option>
                          <option value="fidelity">Fidelity Bank</option>
                          <option value="first bank">First Bank </option>
                          <option value="fcmb"
                            >First City Monument Bank (FCMB)</option
                          >
                          <option value="fsdh">FSDH Merchant Bank</option>
                          <option value="gtb"
                            >Guarantee Trust Bank (GTB)</option
                          >
                          <option value="heritage">Heritage Bank</option>
                          <option value="Keystone">Keystone Bank</option>
                          <option value="rand">Rand Merchant Bank</option>
                          <option value="skye">Polaris Bank</option>
                          <option value="stanbic">Stanbic IBTC Bank</option>
                          <option value="standard"
                            >Standard Chartered Bank</option
                          >
                          <option value="sterling">Sterling Bank</option>
                          <option value="suntrust">Suntrust Bank</option>
                          <option value="union">Union Bank</option>
                          <option value="uba"
                            >United Bank for Africa (UBA)</option
                          >
                          <option value="unity">Unity Bank</option>
                          <option value="wema">Wema Bank</option>
                          <option value="zenith">Zenith Bank</option>-->
                        </select>
                        <span style="font-size:13px; color:red">
                          <span v-if="errors[0]">
                            <i class="fas fa-ban"></i>
                          </span>
                          {{ errors[0] }}
                        </span>
                      </ValidationProvider>
                    </div>
                  </div>

                  <div class="form-row">
                    <div class="col-md-5 mt-3 loanPurpose">
                      <ValidationProvider name="loanPurpose" rules="required" v-slot="{ errors }">
                        <label for="exampleFormControlTextarea1">
                          Loan Purpose
                          <span class="text-danger">*</span>
                        </label>
                        <textarea
                          v-model="loanPurpose"
                          name="loanPurpose"
                          class="form-control text-area"
                          id="exampleFormControlTextarea1"
                          rows="3"
                        ></textarea>
                        <span style="font-size:13px; color:red">
                          <span v-if="errors[0]">
                            <i class="fas fa-ban"></i>
                          </span>
                          {{ errors[0] }}
                        </span>
                      </ValidationProvider>
                    </div>
                  </div>
                </div>
                <div class="d-flex mt-3 justify-content-between">
                  <button class="btn btn-info" @click="$router.go(-1)">Previous</button>
                  <button class="btn btn-info" type="submit">Submit</button>
                </div>
              </form>
            </ValidationObserver>
          </b-tab>

          <!-- Work Information -->
          <!-- <b-tab :title-link-class="active2" class="" title="Work Information">
            <ValidationObserver v-slot="{ passes }">
              <form @submit.prevent="passes(next_page)">
                <div class="tab-contents">
                  <div class="form-row">
                    <div class="col-md-5 mb-3">
                      <ValidationProvider
                        name="Employment Type"
                        rules="required"
                        v-slot="{ errors }"
                      >
                        <span class="m"
                          >Employment Type
                          <span class="text-danger">*</span></span
                        >
                        <select
                          class="browser-default custom-select"
                          v-model="employmentType"
                          name="Employment Type"
                        >
                          <option value="Self-Employed">Self Employed</option>
                          <option value="Private-Sector">Private Sector</option>
                          <option value="Public-Sector">Public Sector</option>
                        </select>
                        <span style="font-size:13px; color:red">
                          <span v-if="errors[0]"
                            ><i class="fas fa-ban"></i
                          ></span>
                          {{ errors[0] }}</span
                        >
                      </ValidationProvider>
                    </div>
                    <div class="col-md-2"></div>
                    <div class="col-md-5 mb-3">
                      <ValidationProvider
                        name="Company name"
                        rules="required"
                        v-slot="{ errors }"
                      >
                        <label for="validationCompanyName"
                          >Company Name
                          <span class="text-danger">*</span></label
                        >
                        <input
                          type="text"
                          v-model="companyName"
                          class="form-control"
                          name="Company name"
                          id="validationCompanyName"
                          placeholder=""
                        />
                        <span style="font-size:13px; color:red">
                          <span v-if="errors[0]"
                            ><i class="fas fa-ban"></i
                          ></span>
                          {{ errors[0] }}</span
                        >
                      </ValidationProvider>
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="col-md-5 mb-3">
                      <ValidationProvider
                        name="Company Address"
                        rules="required"
                        v-slot="{ errors }"
                      >
                        <label for="validationCompanyAddress"
                          >Company Address
                          <span class="text-danger">*</span></label
                        >
                        <textarea
                          type="text"
                          v-model="companyAddress"
                          class="form-control"
                          name="Company Address"
                          id="validationCompanyName"
                          rows="3"
                          placeholder=""
                        >
                        </textarea>
                        <span style="font-size:13px; color:red">
                          <span v-if="errors[0]"
                            ><i class="fas fa-ban"></i
                          ></span>
                          {{ errors[0] }}</span
                        >
                      </ValidationProvider>
                    </div>
                    <div class="col-md-2"></div>
                    <div class="col-md-5 mb-3">
                      <ValidationProvider
                        name="Official Address"
                        rules="required|email"
                        v-slot="{ errors }"
                      >
                        <label for="validationCompanyOfficial"
                          >Official Email Address
                          <span class="text-danger">*</span></label
                        >
                        <input
                          type="email"
                          v-model="officialEmail"
                          class="form-control"
                          name="Official Address"
                          id="validationCompanyName"
                          placeholder=""
                        />
                        <span style="font-size:13px; color:red">
                          <span v-if="errors[0]"
                            ><i class="fas fa-ban"></i
                          ></span>
                          {{ errors[0] }}</span
                        >
                      </ValidationProvider>
                    </div>
                  </div>
                  <div class="form-row mb-3">
                    <div class="col-md-5 mb-2">
                      <ValidationProvider
                        name="Phone Number"
                        rules="required|numeric|min:11|max:15"
                        v-slot="{ errors }"
                      >
                        <label for="validationCompanyPhone"
                          >Phone Number
                          <span class="text-danger">*</span></label
                        >
                        <input
                          type="number"
                          v-model="phoneNumber"
                          class="form-control"
                          name="Phone Number"
                          id="validationCompanyName"
                          placeholder=""
                        />
                        <span style="font-size:13px; color:red">
                          <span v-if="errors[0]"
                            ><i class="fas fa-ban"></i
                          ></span>
                          {{ errors[0] }}</span
                        >
                      </ValidationProvider>
                    </div>
                    <div class="col-md-2"></div>
                    <div class="col-md-5">
                      <ValidationProvider
                        name="position"
                        rules="required"
                        v-slot="{ errors }"
                      >
                        <label for="validationCompanyPhone"
                          >Position <span class="text-danger">*</span></label
                        >
                        <input
                          type="text"
                          v-model="position"
                          class="form-control"
                          name="position"
                          id="validationCompanyName"
                          placeholder=""
                        />
                        <span style="font-size:13px; color:red">
                          <span v-if="errors[0]"
                            ><i class="fas fa-ban"></i
                          ></span>
                          {{ errors[0] }}</span
                        >
                      </ValidationProvider>
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="col-md-5 mb-3">
                      <ValidationProvider
                        name="Monthly Income"
                        rules="required"
                        v-slot="{ errors }"
                      >
                        <label for=""
                          >Monthly Income
                          <span class="text-danger">*</span></label
                        >
                        <div class="input-group">
                          <div class="input-group-prepend">
                            <span
                              class="input-group-text"
                              id="inputGroupPrepend"
                              >&#8358;</span
                            >
                          </div>
                          <input
                            type="text"
                            v-model="monthlyIncome"
                            class="form-control"
                            placeholder=""
                            name="Monthly Income"
                          />
                        </div>
                        <span style="font-size:13px; color:red">
                          <span v-if="errors[0]"
                            ><i class="fas fa-ban"></i
                          ></span>
                          {{ errors[0] }}</span
                        >
                      </ValidationProvider>
                    </div>
                    <div class="col-md-2"></div>
                    <div class="col-md-5 mb-3">
                      <ValidationProvider
                        name="Annual Income"
                        rules="required"
                        v-slot="{ errors }"
                      >
                        <label for="v"
                          >Annual Income
                          <span class="text-danger">*</span></label
                        >
                        <div class="input-group">
                          <div class="input-group-prepend">
                            <span
                              class="input-group-text"
                              id="inputGroupPrepend"
                              >&#8358;</span
                            >
                          </div>
                          <input
                            type="text"
                            v-model="annualIncome"
                            class="form-control"
                            placeholder=""
                            name="Annual Income"
                          />
                        </div>
                        <span style="font-size:13px; color:red">
                          <span v-if="errors[0]"
                            ><i class="fas fa-ban"></i
                          ></span>
                          {{ errors[0] }}</span
                        >
                      </ValidationProvider>
                    </div>
                  </div>

                  <div class="form-row">
                    <div class="col-md-5">
                      <label for="exampleFormControlTextarea1"
                        >Other comments (optional)</label
                      >
                      <textarea
                        v-model="otherComments"
                        class="form-control text-area"
                        id="exampleFormControlTextarea1"
                        rows="3"
                      ></textarea>
                    </div>

                    <div class="col-md-2"></div>

                    <div class="col-md-5 mb-3" v-if="currentRoute == 'finance'">
                      <ValidationProvider
                        name="RC Number"
                        rules="numeric"
                        v-slot="{ errors }"
                      >
                        <label for="validationCompanyPhone">RC Number</label>
                        <input
                          type="text"
                          v-model="rcNumber"
                          class="form-control"
                          name="RC Number"
                          id="validationCompanyName"
                          placeholder=""
                        />
                        <span style="font-size:13px; color:red">
                          <span v-if="errors[0]"
                            ><i class="fas fa-ban"></i
                          ></span>
                          {{ errors[0] }}</span
                        >
                      </ValidationProvider>
                    </div>
                  </div>
                </div>
                <div class="d-flex mt-3 justify-content-between">
                  <button class="btn btn-info">Previous</button>
                  <button class="btn btn-info">Next</button>
                </div>
              </form>
            </ValidationObserver>
          </b-tab>-->

          <!-- Guarantor Information -->
          <!-- <b-tab :title-link-class="active2" class="" title="Guarantor Details">
            <ValidationObserver v-slot="{ passes }">
              <form @submit.prevent="passes(next_page)">
                <div class="tab-contents">
                  <section class="section-1 mb-3">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="mb-3">
                          <ValidationProvider
                            name="title"
                            rules="required"
                            v-slot="{ errors }"
                          >
                            <span class="m"
                              >Title <span class="text-danger">*</span></span
                            >
                            <select
                              class="browser-default custom-select"
                              v-model="title"
                              name="title"
                            >
                              <option selected value="Mr">Mr</option>
                              <option value="Miss">Miss</option>
                              <option value="Mrs">Mrs</option>
                            </select>
                            <span style="font-size:13px; color:red">
                              <span v-if="errors[0]"
                                ><i class="fas fa-ban"></i
                              ></span>
                              {{ errors[0] }}</span
                            >
                          </ValidationProvider>
                        </div>
                        <div class=" mb-3">
                          <ValidationProvider
                            name="firstname"
                            rules="required|max:50"
                            v-slot="{ errors }"
                          >
                            <span class="m"
                              >First Name
                              <span class="text-danger">*</span></span
                            >
                            <input
                              type="text"
                              v-model="firstname"
                              class="form-control"
                              name="firstname"
                              placeholder=""
                              require
                            />
                            <span style="font-size:13px; color:red">
                              <span v-if="errors[0]"
                                ><i class="fas fa-ban"></i
                              ></span>
                              {{ errors[0] }}</span
                            >
                          </ValidationProvider>
                        </div>
                        <div class=" mb-3">
                          <ValidationProvider
                            name="lastname"
                            rules="required|max:50"
                            v-slot="{ errors }"
                          >
                            <span class="m"
                              >Last Name
                              <span class="text-danger">*</span></span
                            >
                            <input
                              type="text"
                              v-model="lastname"
                              class="form-control"
                              name="lastname"
                              placeholder=""
                            />
                            <span style="font-size:13px; color:red">
                              <span v-if="errors[0]"
                                ><i class="fas fa-ban"></i
                              ></span>
                              {{ errors[0] }}</span
                            >
                          </ValidationProvider>
                          <div class="text-warning mt-2" v-if="nameDuplicate1">
                            <i
                              class="fa fa-exclamation-triangle text-warning ml-2 mr-2"
                            ></i
                            >guarantor name must be different from your name
                          </div>
                        </div>
                        <div class="mb-3">
                          <ValidationProvider
                            name="email"
                            rules="required|email"
                            v-slot="{ errors }"
                          >
                            <span class="m"
                              >Email Address
                              <span class="text-danger">*</span></span
                            >
                            <div class="input-group">
                              <input
                                type="text"
                                v-model="email"
                                class="form-control"
                                placeholder=""
                                name="email"
                              />
                              <div class="input-group-append">
                                <span
                                  class="input-group-text"
                                  id="inputGroupAppend"
                                  >@</span
                                >
                              </div>
                            </div>
                            <span style="font-size:13px; color:red">
                              <span v-if="errors[0]"
                                ><i class="fas fa-ban"></i
                              ></span>
                              {{ errors[0] }}</span
                            >
                          </ValidationProvider>
                          <div class="text-warning mt-2" v-if="emailDuplicate1">
                            <i
                              class="fa fa-exclamation-triangle text-warning ml-2 mr-2"
                            ></i
                            >guarantor email must not be same as your email
                          </div>
                        </div>
                        <div class="mb-3">
                          <ValidationProvider
                            name="phone number"
                            rules="min:11|max:15"
                            v-slot="{ errors }"
                          >
                            <span class="m">Phone Number</span>
                            <input
                              type="text"
                              :disabled="guarantorOnly"
                              v-model="phone"
                              name="phone number"
                              class="form-control"
                              placeholder=""
                            />

                            <div
                              class="text-warning mt-2"
                              v-if="phoneDuplicate1"
                            >
                              <i
                                class="fa fa-exclamation-triangle text-warning ml-2 mr-2"
                              ></i
                              >guarantor's phoneNumber must not be same as yours
                            </div>
                            <span style="font-size:13px; color:red">
                              <span v-if="errors[0]"
                                ><i class="fas fa-ban"></i
                              ></span>
                              {{ errors[0] }}</span
                            >
                          </ValidationProvider>
                        </div>
                        <div class="mb-3">
                          <ValidationProvider
                            name="address"
                            rules=""
                            v-slot="{ errors }"
                          >
                            <span class="m">Home Address</span>
                            <textarea
                              type="text"
                              :disabled="guarantorOnly"
                              v-model="address"
                              name="address"
                              class="form-control textarea"
                              rows="3"
                              placeholder=""
                            ></textarea>
                            <span style="font-size:13px; color:red">
                              <span v-if="errors[0]"
                                ><i class="fas fa-ban"></i
                              ></span>
                              {{ errors[0] }}</span
                            >
                          </ValidationProvider>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="row">
                          <div class="col-md-3"></div>
                          <div class="col-md-9">
                            <div class="mb-5 mt-md-0 ml2">
                              <span class="mt-md-n4 mb-md-3"
                                >Guarantor's ID Card
                              </span>
                              <div
                                class=" mb-4 mb-md-0 "
                                style="height:105px; width:170px; border:1px solid blue"
                              >
                                <img
                                  style="max-width:100%; height:100px"
                                  class="img-fluid"
                                  :src="id"
                                  alt=""
                                />
                              </div>
                              <span style="font-size:13px; color:red"
                                >maximum file size : 2mb</span
                              >
                              <div class="input-group ml-1 mt-2">
                                <ValidationProvider
                                  name="idCard"
                                  rules="image|size:2000"
                                  v-slot="{ validate, errors }"
                                >
                                  <label class="btn ml-n1 btn-info btn-file">
                                    BROWSE
                                    <input
                                      :disabled="guarantorOnly"
                                      type="file"
                                      class=" mt-3 mt-md-0 mb-2 mb-md-1 small-screen-id"
                                      style="display:none"
                                      @change="
                                        onFileChange($event);
                                        validate($event);
                                      "
                                      name="idCard"
                                      id="id"
                                    />
                                  </label>
                                  <br />
                                  <span style="font-size:13px; color:red">
                                    <span v-if="errors[0]"
                                      ><i class="fas fa-ban"></i
                                    ></span>
                                    {{ errors[0] }}</span
                                  >
                                </ValidationProvider>
                              </div>
                            </div>
                            <div class="mb-3 mt-3 mt-md-0 ">
                              <span class="mt-md-n4 mb-md-3"
                                >Guarantor's Signature
                              </span>
                              <div
                                class=" mb-4 mb-md-0"
                                style="height:105px; width:170px; border:1px solid blue"
                              >
                                <img
                                  style="max-width:100%; height:100px"
                                  class="img-fluid"
                                  :src="signature"
                                  alt=""
                                />
                              </div>
                              <span style="font-size:13px; color:red"
                                >maximum file size : 2mb</span
                              >
                              <div class="input-group ml-1 mt-2">
                                <ValidationProvider
                                  name="signature"
                                  rules="image|size:2000"
                                  v-slot="{ validate, errors }"
                                >
                                  <label class="btn ml-n1 btn-info btn-file">
                                    BROWSE
                                    <input
                                      type="file"
                                      :disabled="guarantorOnly"
                                      class=" mt-3 mt-md-0 mb-2 mb-md-1 small-screen-id"
                                      style="display:none"
                                      @change="
                                        onFileChange1($event);
                                        validate($event);
                                      "
                                      name="signature"
                                      id="signature"
                                    />
                                  </label>
                                  <br />
                                  <span style="font-size:13px; color:red">
                                    <span v-if="errors[0]"
                                      ><i class="fas fa-ban"></i
                                    ></span>
                                    {{ errors[0] }}</span
                                  >
                                </ValidationProvider>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-row" v-if="currentRoute == 'loan'">
                      <div class="form-group">
                        <div class="mt-3 ml-n1 ">
                          <ValidationProvider
                            name="id"
                            rules="required"
                            v-slot="{ validate, errors }"
                          >
                            <label class="checkbox">
                              <input
                                name="terms"
                                @change="isChecked"
                                v-model="checked"
                                type="checkbox"
                              />
                              <span
                                class="ml-2"
                                :class="{ valid: isValid, invalid: isInvalid }"
                                >I agree that I have read and accepted the
                              </span>
                            </label>
                            <span style="font-size:13px; color:red">
                              <span v-if="errors[0]"
                                ><i class="fas fa-ban"></i
                              ></span>
                              {{ errors[0] }}</span
                            >
                          </ValidationProvider>

                          <span
                            :class="{ valid: isValid }"
                            class="ml-2"
                            style="cursor:pointer;color:blue"
                            @click="showModal12a = true"
                            >terms and conditions.</span
                          >
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
                <div class="d-flex mt-3 justify-content-between">
                  <button class="btn btn-info">Previous</button>
                  <button class="btn btn-info">Submit</button>
                </div>
              </form>
            </ValidationObserver>
          </b-tab>-->
        </b-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import Loader from "../../../utils/vue-loader/loader.vue";
import VueNumeric from "vue-numeric";
import { clientService } from "../../../services/ClientServices/client.services";
import { ValidationObserver, ValidationProvider } from "vee-validate";
import { mapState } from "vuex";
export default {
  name: "Apply",
  components: {
    ValidationObserver,
    ValidationProvider,
    Loader,
    VueNumeric
  },
  data() {
    return {
      amount: 0,
      tenor: 0,
      loanPurpose: "",
      bank: "",
      loading: false
    };
  },
  computed: {
    current() {
      return ["current2"];
    },
    ...mapState({
      USER_DATA: state => state.User.USER_DATA
    }),
    account() {
      return this.USER_DATA.account.accounts[0].number;
    }
  },
  watch: {
    account(newval) {
      if (newval.length == 10) this.validateAccount();
    }
  },
  methods: {
    minus() {
      if (this.tenor <= 0) return;
      this.tenor = this.tenor - 1;
    },
    plus() {
      if (this.tenor >= 6) return;
      this.tenor = this.tenor + 1;
    },
    checkInput() {
      if (this.meansOfId == "Others (please specify)")
        return (this.others = true);

      this.others = false;
    },
    //Post Loan
    async postLoan() {
      this.loading = true;
      await clientService
        .postLoan({
          amount: this.amount,
          tenor: this.tenor,
          account: this.account,
          purpose: this.loanPurpose,
          bank: this.bank
        })
        .then(res => {
          this.$toastr.s(res.message, "Posted Succesfully");
          this.$router.push("/Loan");
        })
        .catch(err => {
          this.$toastr.e(err.message || err, "Failed!");
        })
        .finally(() => {
          this.loading = false;
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.tab-content {
  font-family: Montserrat-Regular;
  margin-top: 0px !important;
  padding: 0px 10px !important;
}

.btn-info {
  background: $background-color;
  border-color: $background-color;
}
</style>
