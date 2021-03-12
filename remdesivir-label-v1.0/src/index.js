/* run this code using Node.js

Summary: The send function sends back certain information based on the input.
For example, the user can input one of the following:

0 = send the whole remdesivir_label_object
1 = send all of the question IDs as a list
2 = send all of the question IDs and questions
3 = send all of the answer IDs as a list
4 = send all of the answer IDs and answers
question/answer identifier = send the single object
*/
function fda_label_content(input) {
	// temp json data
	var remdesivir_label_object = {
	"QApair_1": {
	"QApair_label":"brand_name",
	"question_id":"b8408b213e84449dbb09fe9efc8fce44",
	"question":"What is its brand name?",
	"answer_id":"95dca543c2344635b15a90e3c2fac164",
	"answer":"VEKLURY",
	"answer_nature":"Unequivocal Answer"},
	"QApair_2": {
	"QApair_label":"generic_name",
	"question_id":"ad47b354ee714cc8b7ad6ed73ca889c9",
	"question":"What is its generic name?",
	"answer_id":"0448074035454eacabeddaabb6777820",
	"answer":"remdesivir",
	"answer_nature":"Unequivocal Answer"},
	"QApair_3": {
	"QApair_label":"included_products",
	"question_id":"b130fa66457849efb6272ec7deca93e1",
	"question":"What drug products are included?",
	"answer_id":"74d406dff7cd4774a538f1fe8bb90cdc",
	"answer":"VEKLURY® (remdesivir) for injection, for intravenous use VEKLURY® (remdesivir) injection, for intravenous use",
	"answer_nature":"Unequivocal Answer"},
	"QApair_4": {
	"QApair_label":"initial_united_states_approval",
	"question_id":"7df59111730a49699f6864257c73738e",
	"question":"What year was its initial U.S. approval?",
	"answer_id":"bd10d1988c90413599e83481a46b1546",
	"answer":"2020",
	"answer_nature":"Unequivocal Answer"},
	"QApair_5": {
	"QApair_label":"indication",
	"question_id":"656d693bbe8f49b4b2f7f8527655636e",
	"question":"What is its indication?",
	"answer_id":"7c5573a83ba54ac5b8b412988bd8f29c",
	"answer":"VEKLURY is indicated for adults and pediatric patients (12 years of age and older and weighing at least 40 kg) for the treatment of coronavirus disease 2019 (COVID-19) requiring hospitalization.",
	"answer_nature":"Unequivocal Answer"},
	"QApair_6": {
	"QApair_label":"where_administered",
	"question_id":"0109d944130344c2869ebc8e9329ac91",
	"question":"Where should it be administered?",
	"answer_id":"b2d9ea3ac32e4e2591342d7998a461d3",
	"answer":"VEKLURY should only be administered in a hospital or in a healthcare setting capable of providing acute care comparable to inpatient hospital care.",
	"answer_nature":"Unequivocal Answer"},
	"QApair_7": {
	"QApair_label":"testing_before_initiatiing_and_during_treatment",
	"question_id":"a79effe7b17d4a778e13dc8858b6d225",
	"question":"What testing needs to be done before Initiating and during treatment?",
	"answer_id":"3927118dce35411b90dda96143659f4f",
	"answer":"Determine eGFR in all patients before starting VEKLURY and monitor while receiving VEKLURY as clinically appropriate. Perform hepatic laboratory testing in all patients before starting VEKLURY and while receiving VEKLURY as clinically appropriate.Determine prothrombin time in all patients before starting VEKLURY and monitor while receiving VEKLURY as clinically appropriate.",
	"answer_nature":"Equivocal Answer"},
	"QApair_8": {
	"QApair_label":"kidney_function_testing",
	"question_id":"c3e78446f57f4580872e8f085dc02863",
	"question":"What testing of kidney function needs to be done before initiating and during treatment?",
	"answer_id":"c4bff4466b1e480191d4738916c6d90c",
	"answer":"Determine eGFR in all patients before starting VEKLURY and monitor while receiving VEKLURY as clinically appropriate.",
	"answer_nature":"Equivocal Answer"},
	"QApair_9": {
	"QApair_label":"liver_function_testing",
	"question_id":"42799976d99f4b8bb900584e4c4ba39f",
	"question":"What testing of liver function needs to be done before initiating and during treatment?",
	"answer_id":"d1f4432d4d4443e99ec222c2c12c431c",
	"answer":"Perform hepatic laboratory testing in all patients before starting VEKLURY and while receiving VEKLURY as clinically appropriate.",
	"answer_nature":"Equivocal Answer"},
	"QApair_10": {
	"QApair_label":"blood_coagulation_testing",
	"question_id":"16bf1bea6419487ea70e8fb869d4a5ef",
	"question":"What testing related to blood coagulation needs to be done before initiating and during treatment? ",
	"answer_id":"837c83bfc4fd427e86b5a92cb41c23f5",
	"answer":"Determine prothrombin time in all patients before starting VEKLURY and monitor while receiving VEKLURY as clinically appropriate.",
	"answer_nature":"Equivocal Answer"},
	"QApair_11": {
	"QApair_label":"recommended_dosage",
	"question_id":"ee8f02b6e42c4c8895faa75fd29b7806",
	"question":"What is the recommended dosage?",
	"answer_id":"3c22769075b848f6a3a57ae1c5748257",
	"answer":"The recommended dosage for adults and pediatric patients 12 years of age and older and weighing at least 40 kg is a single loading dose of VEKLURY 200 mg on Day 1 via intravenous infusion followed by once-daily maintenance doses of VEKLURY 100 mg from Day 2 via intravenous infusion.",
	"answer_nature":"Unequivocal Answer"},
	"QApair_12": {
	"QApair_label":"treatment_duration",
	"question_id":"16e23675e7794705b4bfeb119321c466",
	"question":"What is the recommended treatment duration?",
	"answer_id":"955a8518da1342feb6094739eeb33477",
	"answer":"The recommended treatment duration for patients not requiring invasive mechanical ventilation and/or extracorporeal membrane oxygenation (ECMO) is 5 days. If a patient does not demonstrate clinical improvement, treatment may be extended for up to 5 additional days for a total treatment duration of up to 10 days. The recommended total treatment duration for patients requiring invasive mechanical ventilation and/or ECMO is 10 days.",
	"answer_nature":"Unequivocal Answer"},
	"QApair_13": {
	"QApair_label":"treatment_duration_when_no_mechanical_ventilation",
	"question_id":"206beaa6195c48679d2330e594b0cd6b",
	"question":"What is the recommended treatment duration for patients not requiring invasive mechanical ventilation and/or extracorporeal membrane oxygenation (ECMO)?",
	"answer_id":"eb895d7168c548909e2e2bc2def46c45",
	"answer":"5 Days",
	"answer_nature":"Unequivocal Answer"},
	"QApair_14": {
	"QApair_label":"treatment_duration_extension",
	"question_id":"c8fd0d1278164e7b87da37540991b846",
	"question":" What is the recommended treatment duration extension period if a patient does not demonstrate clinical improvement?",
	"answer_id":"e2d6a01b8b564353b4c4f6c9c3c24c6d",
	"answer":"Treatment may be extended for up to 5 additional days for a total treatment duration of up to 10 days.",
	"answer_nature":"Unequivocal Answer"},
	"QApair_15": {
	"QApair_label":"treatment_duration_when_with_mechanical_ventilation",
	"question_id":"a21e528d802d41549a1c0d79e2beec0b",
	"question":"What is the recommended treatment duration for patients requiring invasive mechanical ventilation and/or extracorporeal membrane oxygenation (ECMO)?",
	"answer_id":"32a0a695df754ed7b2caf7bcc1906312",
	"answer":"The recommended total treatment duration for patients requiring invasive mechanical ventilation and/or ECMO is 10 days.",
	"answer_nature":"Unequivocal Answer"},
	"QApair_16": {
	"QApair_label":"need_dilution",
	"question_id":"5f61e7990a4d465fa0d5aeb109c682d0",
	"question":"Does the drug product need to be diluted?",
	"answer_id":"7ff558a6ce414841bf641b6bef08ab81",
	"answer":"VEKLURY must be diluted prior to intravenous infusion.",
	"answer_nature":"Unequivocal Answer"},
	"QApair_17": {
	"QApair_label":"renal_impairment",
	"question_id":"cad9862cefc6415dae2b47cc839279ee",
	"question":"What is recommended in cases of renal impairment?",
	"answer_id":"d30fc2e72c2e476a96984e8b270ba634",
	"answer":"VEKLURY is not recommended in patients with eGFR less than 30 mL per minute.",
	"answer_nature":"Unequivocal Answer"},
	"QApair_18": {
	"QApair_label":"supervision",
	"question_id":"7ef52c4f2daa482696b8675fae9a434d",
	"question":"What supervision is required for use?",
	"answer_id":"50271bed90bf4732bf555abb5eb331f1",
	"answer":"VEKLURY must be prepared and administered under the supervision of a healthcare provider.",
	"answer_nature":"Unequivocal Answer"},
	"QApair_19": {
	"QApair_label":"route_of_administration",
	"question_id":"a1ae260b2b754f44bcc50a10df9f0c16",
	"question":"What is the required route of administration?",
	"answer_id":"f0774b9d0ecd4f97944cf7f935382cb4",
	"answer":"VEKLURY must be administered via intravenous infusion only. Do not administer by any other route.",
	"answer_nature":"Unequivocal Answer"},
	"QApair_20": {
	"QApair_label":"number_of_dosage_forms",
	"question_id":"1d737a212e4347aa965cd2874b93c4f7",
	"question":"How many dosage forms are available?",
	"answer_id":"ebd02a67b64b473aad8ce9f8eace957e",
	"answer":"VEKLURY is available in two dosage forms.",
	"answer_nature":"Unequivocal Answer"},
	"QApair_21": {
	"QApair_label":"dosage_forms",
	"question_id":"fc353220d9954f94a14089b8411fcadb",
	"question":"What are the available dosage forms?",
	"answer_id":"e7461650519b4e6680fc44f935b1c6b6",
	"answer":"VEKLURY for injection (supplied as 100 mg lyophilized powder in vial) needs to be reconstituted with Sterile Water for Injection prior to diluting in a 100 mL or 250 mL 0.9% sodium chloride infusion bag AND VEKLURY for injection (supplied as 100 mg lyophilized powder in vial) needs to be reconstituted with Sterile Water for Injection prior to diluting in a 100 mL or 250 mL 0.9% sodium chloride infusion bag.",
	"answer_nature":"Unequivocal Answer"},
	"QApair_22": {
	"QApair_label":"drug_product_inspection",
	"question_id":"f2570e902ffd433abfb554c32afbfbda",
	"question":"How should parenteral drug products be inspected?",
	"answer_id":"b25e80145c434a35a1015376255e7c2b",
	"answer":"Parenteral drug products should be inspected visually for particulate matter and discoloration prior to administration.",
	"answer_nature":"Unequivocal Answer"},
	"QApair_23": {
	"QApair_label":"when_to_discard",
	"question_id":"313babc40dfc46039269a49d187af4b7",
	"question":"When should the drug product be discarded?",
	"answer_id":"8ed2ac3a21e342ceb7840097c33ff43a",
	"answer":"Discard the vial if the lyophilized powder or solution is discolored or contains particulate matter.",
	"answer_nature":"Unequivocal Answer"},
	"QApair_24": {
	"QApair_label":"what_products_look_like_prior_to_dilution",
	"question_id":"592501e16f7343b18e58db19d57586a9",
	"question":"What should the drug products look like prior to dilution?",
	"answer_id":"b8edd72ee7a64b6696b0f53d9b652848",
	"answer":"Prior to dilution in a 0.9% sodium chloride infusion bag, reconstituted VEKLURY for injection and VEKLURY injection solution should be a clear, colorless to yellow solution, free of visible particles.",
	"answer_nature":"Unequivocal Answer"},
	"QApair_25": {
	"QApair_label":"general_preparation",
	"question_id":"f6f5c822717440b0b0247c434588caf2",
	"question":"How are these products generally prepared?",
	"answer_id":"d95933a3dc3245dda5aed34dbd1e282c",
	"answer":"Prepare diluted solution under aseptic conditions and on same day as administration.",
	"answer_nature":"Unequivocal Answer"},
	"QApair_26": {
	"QApair_label":"powder_reconstitution_procedures",
	"question_id":"c669a0a8a1544b44b834b3a7131c6f14",
	"question":"When supplied as a lyophilized powder in a vial, how should the dosage form be reconstituted?",
	"answer_id":"0bdb4ae353aa4f28b52cc7c898b29429",
	"answer":"VEKLURY for Injection (Supplied as 100 mg Lyophilized Powder in Vial) Reconstitution Instructions Remove the required number of single-dose vial(s) from storage. For each vial: • Aseptically reconstitute VEKLURY lyophilized powder by adding 19 mL of Sterile Water for Injection using a suitably sized syringe and needle per vial. • Only use Sterile Water for Injection to reconstitute VEKLURY lyophilized powder. • Discard the vial if a vacuum does not pull the Sterile Water for Injection into the vial. • Immediately shake the vial for 30 seconds. • Allow the contents of the vial to settle for 2 to 3 minutes. A clear solution should result. • If the contents of the vial are not completely dissolved, shake the vial again for 30 seconds and allow the contents to settle for 2 to 3 minutes. Repeat this procedure as necessary until the contents of the vial are completely dissolved. Discard the vial if the contents are not completely dissolved. • Following reconstitution, each vial contains 100 mg/20 mL (5 mg/mL) of remdesivir solution. • Use reconstituted product immediately to prepare the diluted drug product",
	"answer_nature":"Unequivocal Answer"},
	"QApair_27": {
	"QApair_label":"reconstitute_with",
	"question_id":"9caba88f2edd41bcab3618da60e673b1",
	"question":"What should be used to reconstitute the lyophilized powder?",
	"answer_id":"4fa22cd184c842d1b13d20e2bee0d67c",
	"answer":"Only use Sterile Water for Injection to reconstitute VEKLURY lyophilized powder.",
	"answer_nature":"Unequivocal Answer"},
	"QApair_28": {
	"QApair_label":"preservatives",
	"question_id":"55dadeea4c1f421da389b51cf6184f71",
	"question":"Are there preservatives or bacteriostatic agents in the products?",
	"answer_id":"cb552d4667d94df5a29cb9b53fd16e14",
	"answer":"There is no preservative or bacteriostatic agent present in this product,",
	"answer_nature":"Unequivocal Answer"},
	"QApair_29": {
	"QApair_label":"aseptic_technique",
	"question_id":"9dc07efbdd5342849204b822c4675020",
	"question":"Must aseptic technique be used to prepare the products?",
	"answer_id":"7acadd1a9e724ebca3dd28d097177009",
	"answer":"Aseptic technique must be used in preparation of the final parenteral solution.",
	"answer_nature":"Unequivocal Answer"},
	"QApair_30": {
	"QApair_label":"immediate_use",
	"question_id":"f3d6ba727a2f4a24969cdb4f1c4297b4",
	"question":"Is immediate use after preparation advised?",
	"answer_id":"2db88b47b9f6412393e7444712a3a6eb",
	"answer":"It is always recommended to administer intravenous medication immediately after preparation when possible.",
	"answer_nature":"Unequivocal Answer"},
	"QApair_31": {
	"QApair_label":"reconstituted_product_dilution",
	"question_id":"44a6079366fd4b9bb7a1390cc973fb1e",
	"question":"How should the reconstituted lyophilized product be further diluted?",
	"answer_id":"3cb881f5a0b24d93af656715245727a8",
	"answer":"Reconstituted VEKLURY for injection, containing 100 mg/20 mL remdesivir solution, must be further diluted in either a 100 mL or 250 mL 0.9% sodium chloride infusion bag.",
	"answer_nature":"Unequivocal Answer"},
	"QApair_32": {
	"QApair_label":"recommended_diluents_for_reconstituted_product_dilution",
	"question_id":"1e79b3e613ac4c7584fdcd070872e58f",
	"question":"What are the recommended diluents for the reconstituted lyophilized product?",
	"answer_id":"3cb881f5a0b24d93af656715245727a8",
	"answer":"Reconstituted VEKLURY for injection, containing 100 mg/20 mL remdesivir solution, must be further diluted in either a 100 mL or 250 mL 0.9% sodium chloride infusion bag.",
	"answer_nature":"Unequivocal Answer"},
	"QApair_33": {
	"QApair_label":"reconstituted_loading_dose_in_250_mL",
	"question_id":"207583ef776b4c3197889ee04f613175",
	"question":"How should a loading dose of 200mg of reconstituted lyophilized VEKLURY in 250mL 0.9% Sodium Chloride be prepared?",
	"answer_id":"b9f44c24c84048febd9ef0426a0b037a",
	"answer":"For a Loading Dose of 200mg (2 Vials) in a 250mL 0.9% Sodium Chloride infusion bag • Withdraw and discard 40mL of 0.9% sodium chloride from the bag using an appropriately sized syringe and needle. • Withdraw the 40mL volume of reconstituted VEKLURY for injection from the two VEKLURY vials using an appropriately sized syringe. Discard any unused portion remaining in the reconstituted vial. • Transfer the 40mL volume of reconstituted VEKLURY for injection to the selected infusion bag. Gently invert the bag 20 times to mix the solution in the bag. Do not shake.",
	"answer_nature":"Unequivocal Answer"},
	"QApair_34": {
	"QApair_label":"reconstitued_loading_dose_in_100_mL",
	"question_id":"3ee84b9af79f469da441cce0b7491d4e",
	"question":"How should a loading dose of 200mg of reconstituted lyophilized VEKLURY in 100mL 0.9% Sodium Chloride be prepared?",
	"answer_id":"e5c64361c28746af8e185913ef4086b8",
	"answer":"For a Loading Dose of 200mg (2 Vials) in a 100mL 0.9% Sodium Chloride infusion bag • Withdraw and discard 40mL of 0.9% sodium chloride from the bag using an appropriately sized syringe and needle. • Withdraw the 40mL volume of reconstituted VEKLURY for injection from the two VEKLURY vials using an appropriately sized syringe. Discard any unused portion remaining in the reconstituted vial. • Transfer the 40mL volume of reconstituted VEKLURY for injection to the selected infusion bag. Gently invert the bag 20 times to mix the solution in the bag. Do not shake.",
	"answer_nature":"Unequivocal Answer"},
	"QApair_35": {
	"QApair_label":"reconstituted_maintenance_dose_in_250_mL",
	"question_id":"354656e3327b408d81975ca27106537e",
	"question":"How should a maintenance dose of 200mg of reconstituted lyophilized VEKLURY in 250mL 0.9% Sodium Chloride be prepared?",
	"answer_id":"bab985c271a94df7a8e23ac254593c72",
	"answer":"For a Maintenance Dose of 100mg (1 Vial) in a 250mL 0.9% Sodium Chloride infusion bag • Withdraw and discard 20mL of 0.9% sodium chloride from the bag using an appropriately sized syringe and needle. • Withdraw the 20mL volume of reconstituted VEKLURY for injection from the one VEKLURY vial using an appropriately sized syringe. Discard any unused portion remaining in the reconstituted vial. • Transfer the 20mL volume of reconstituted VEKLURY for injection to the selected infusion bag. Gently invert the bag 20 times to mix the solution in the bag. Do not shake.",
	"answer_nature":"Unequivocal Answer"},
	"QApair_36": {
	"QApair_label":"reconstituted_maintenance_dose_in_100_mL",
	"question_id":"d0af9e9698c54eadb67fb1be72531517",
	"question":"How should a maintenance dose of 200mg of reconstituted lyophilized VEKLURY in 100mL 0.9% Sodium Chloride be prepared?",
	"answer_id":"d4e5280cd4ce40ba9977d47e6693c0bc",
	"answer":"For a Maintenance Dose of 100mg (1 Vial) in a 100mL 0.9% Sodium Chloride infusion bag • Withdraw and discard 20mL of 0.9% sodium chloride from the bag using an appropriately sized syringe and needle. • Withdraw the 20mL volume of reconstituted VEKLURY for injection from the one VEKLURY vial using an appropriately sized syringe. Discard any unused portion remaining in the reconstituted vial. • Transfer the 20mL volume of reconstituted VEKLURY for injection to the selected infusion bag. Gently invert the bag 20 times to mix the solution in the bag. Do not shake.",
	"answer_nature":"Unequivocal Answer"},
	"QApair_37": {
	"QApair_label":"prepared_infusion_solution_stability",
	"question_id":"305f4c2e5ae940539686b409e634ec8b",
	"question":"What is the stability of the prepared infusion solution of VEKLURY?",
	"answer_id":"ce519bb9d44f475bb4c3b0b8b5399fb6",
	"answer":"The prepared infusion solution is stable for 24 hours at room temperature (20°C to 25°C [68°F to 77°F]) or 48 hours at refrigerated temperature (2°C to 8°C [36°F to 46°F]).",
	"answer_nature":"Unequivocal Answer"},
	"QApair_38": {
	"QApair_label":"storage_temperatures",
	"question_id":"67d23a9fa988457180f1e20935889035",
	"question":"At what temperatures should the prepared infusion solution of VEKLURY be kept?",
	"answer_id":"ce519bb9d44f475bb4c3b0b8b5399fb6",
	"answer":"The prepared infusion solution is stable for 24 hours at room temperature (20°C to 25°C [68°F to 77°F]) or 48 hours at refrigerated temperature (2°C to 8°C [36°F to 46°F]).",
	"answer_nature":"Unequivocal Answer"},
	"QApair_39": {
	"QApair_label":"simultaneous_administration",
	"question_id":"1efe3ee120d74da58163fcdcff38f45a",
	"question":"Can VEKLURY be administered simultaneously with any other medication?",
	"answer_id":"31f1e0459f1146918c73096d3a0a6145",
	"answer":"Do not administer the prepared diluted solution simultaneously with any other medication. ",
	"answer_nature":"Unequivocal Answer"},
	"QApair_40": {
	"QApair_label":"intravenous_compatibility",
	"question_id":"e63664d6adea4715a25d138da34321ff",
	"question":"Is VEKLURY injection compatible with other intravenous solutions or medications besides 0.9% sodium chloride USP? ",
	"answer_id":"9117ab9d2a6b489f9956a54863bbeb8f",
	"answer":"The compatibility of VEKLURY injection with intravenous solutions and medications other than 0.9% sodium chloride injection, USP is not known. ",
	"answer_nature":"Unequivocal Answer"},
	"QApair_41": {
	"QApair_label":"infustion_time_range",
	"question_id":"1e71414fc9ef4eb4b719b41f69139102",
	"question":"What is the general time duration over which VEKLURY should be administered by intravenous infusion?",
	"answer_id":"42de14bd912f46ddaa2c3f8967c1b677",
	"answer":"Administer VEKLURY via intravenous infusion over 30 to 120 minutes.",
	"answer_nature":"Unequivocal Answer"},
	"QApair_42": {
	"QApair_label":"infusion_rate_for_250mL_over_30_minutes",
	"question_id":"b1d57785471c4fc8949f7752181269fa",
	"question":"At what rate should an influsion bag containing VEKLURY with a volume of 250mL be infused for the infusion to have an infusion time of 30 minutes?",
	"answer_id":"7b17fc4a8ef14f39b9349543c4c6a386",
	"answer":"8.33 mL/minute",
	"answer_nature":"Unequivocal Answer"},
	"QApair_43": {
	"QApair_label":"infusion_rate_for_250mL_over_60_minutes",
	"question_id":"54c78037d82545a68054bbd1f1651d92",
	"question":"At what rate should an influsion bag containing VEKLURY with a volume of 250mL be infused for the infusion to have an infusion time of 60 minutes?",
	"answer_id":"d736114c6d5f4a1f84f62811b036b895",
	"answer":"4.17 mL/minute",
	"answer_nature":"Unequivocal Answer"},
	"QApair_44": {
	"QApair_label":"infusion_rate_for_250mL_over_120_minutes",
	"question_id":"9f70e8178a0045c08af8c83e1ec6916a",
	"question":"At what rate should an influsion bag containing VEKLURY with a volume of 250mL be infused for the infusion to have an infusion time of 120 minutes?",
	"answer_id":"ed74c8266a80408284074d46e276aa53",
	"answer":"2.08 mL/minute",
	"answer_nature":"Unequivocal Answer"},
	"QApair_45": {
	"QApair_label":"infusion_rate_for_100mL_over_30_minutes",
	"question_id":"a0cd5a54e41d49749ec3cf7eebc08ad7",
	"question":"At what rate should an influsion bag containing VEKLURY with a volume of 100mL be infused for the infusion to have an infusion time of 30 minutes?",
	"answer_id":"98401610dd9541d2a7a819f2d0705a01",
	"answer":"3.33 mL/minute",
	"answer_nature":"Unequivocal Answer"},
	"QApair_46": {
	"QApair_label":"infusion_rate_for_100mL_over_60_minutes",
	"question_id":"deaeae256712486db8e572bb996ad794",
	"question":"At what rate should an influsion bag containing VEKLURY with a volume of 100mL be infused for the infusion to have an infusion time of 60 minutes?",
	"answer_id":"67a24a094d3b4973a2f7eca179a3ab30",
	"answer":"1.67 mL/minute",
	"answer_nature":"Unequivocal Answer"},
	"QApair_47": {
	"QApair_label":"infusion_rate_for_100mL_over_120_minutes",
	"question_id":"3d1741699cb346bf8d6be42d1627e3f1",
	"question":"At what rate should an influsion bag containing VEKLURY with a volume of 100mL be infused for the infusion to have an infusion time of 120 minutes?",
	"answer_id":"c9051afb3e3247ab8896561f8d8c64df",
	"answer":"0.83 mL/minue",
	"answer_nature":"Unequivocal Answer" },
	"QApair_48": {
	"QApair_label":"solution_reconstitution_procedures",
	"question_id":"ac74389fd22546ebb6f77b2037f56ebd",
	"question":"When supplied as a 100mg/20mL (5mg/mL) solution in a vial, how should the dosage form be reconstituted?",
	"answer_id":"828fb8431ff1499da9ef2f451798b4c7",
	"answer":"VEKLURY Injection (Supplied as 100 mg/20 mL [5 mg/mL] Solution in Vial) Dilution Instructions Care should be taken during admixture to prevent inadvertent microbial contamination. As there is no preservative or bacteriostatic agent present in this product, aseptic technique must be used in preparation of the final parenteral solution. It is always recommended to administer intravenous medication immediately after preparation when possible. • Remove the required number of single-dose vial(s) from storage. Each vial contains 100 mg/20 mL of remdesivir. For each vial: • Equilibrate to room temperature (20°C to 25°C [68°F to 77°F]). Sealed vials can be stored up to 12 hours at room temperature prior to dilution. • Inspect the vial to ensure the container closure is free from defects and the solution is free of particulate matter. • VEKLURY injection must be diluted in an infusion bag containing 250 mL of 0.9% sodium chloride only.",
	"answer_nature":"Unequivocal Answer"},
	"QApair_49": {
	"QApair_label":"solution_loading_dose_in_250_mL",
	"question_id":"fc7e8471a04844429a2aa93966feccac",
	"question":"How should a loading dose of 200mg of VEKLURY solution for injection in 250mL 0.9% Sodium Chloride be prepared?",
	"answer_id":"127f601912344304a86b7e626c9f19b8",
	"answer":"For a Loading Dose of 200mg (2 Vials) in a 250mL 0.9% Sodium Chloride infusion bag • Withdraw and discard 40mL of 0.9% sodium chloride from the bag using an appropriately sized syringe and needle. • Use an appropriately sized syringe. • Pull the syringe plunger rod back to fill the syringe with approximately 10 mL of air. • Inject the air into the VEKLURY injection vial above the level of the solution. • Invert the vial and withdraw the required volume of VEKLURY injection solution into the syringe. The last 5 mL of solution requires more force to withdraw. • Transfer 40mL of VEKLURY injection to the infusion bag. • Gently invert the bag 20 times to mix the solution in the bag. Do not shake. ",
	"answer_nature":"Unequivocal Answer"},
	"QApair_50": {
	"QApair_label":"solution_maintenance_dose_in_250_mL",
	"question_id":"a8fe3f500fa34813ad95d5090fdebccd",
	"question":"How should a maintenance dose of 100mg of VEKLURY solution for injection in 250mL 0.9% Sodium Chloride be prepared?",
	"answer_id":"1cf5506b2aa847b688e3c521ba0aa8c3",
	"answer":"For a Maintenance Dose of 100mg (1 Vial) in a 250mL 0.9% Sodium Chloride infusion bag • Withdraw and discard 20mL of 0.9% sodium chloride from the bag using an appropriately sized syringe and needle. • Use an appropriately sized syringe. • Pull the syringe plunger rod back to fill the syringe with approximately 10 mL of air. • Inject the air into the VEKLURY injection vial above the level of the solution. • Invert the vial and withdraw 20mL of VEKLURY injection solution into the syringe. The last 5 mL of solution requires more force to withdraw. • Transfer 20mL of VEKLURY injection to the infusion bag. • Gently invert the bag 20 times to mix the solution in the bag. Do not shake.",
	"answer_nature":"Unequivocal Answer"},
	"QApair_51": {
	"QApair_label":"contraindications",
	"question_id":"2ae90704fc1546eaa48a945c0f3b73a8",
	"question":"What are the drug's contraindications?",
	"answer_id":"c2c696d21e834d0397f2f93f9e24cc76",
	"answer":"VEKLURY is contraindicated in patients with a history of clinically significant hypersensitivity reactions to VEKLURY or any components of the product",
	"answer_nature":"Unequivocal Answer"},
	"QApair_52": {
	"QApair_label":"warnings_and_precations",
	"question_id":"c109964712a6472280d4f79198c50974",
	"question":"What are the warnings and precautions?",
	"answer_id":"7e2c8c3573564b9aac5951246b46a195",
	"answer":"Hypersensitivity Including Infusion-related and Anaphylactic Reactions, Increased Risk of Transaminase Elevations, Risk of Reduced Antiviral Activity When Coadministered with Chloroquine Phosphate or Hydroxychloroquine Sulfate",
	"answer_nature":"Unequivocal Answer"},
	"QApair_53": {
	"QApair_label":"hypersensitivity_reactions",
	"question_id":"f41a347cb1724e1e853fa98a89b8d441",
	"question":"Have hypersensitivity reactions been observed?",
	"answer_id":"3b2b3400a9d04b348ee0a9c52b637416",
	"answer":"Hypersensitivity reactions, including infusion-related and anaphylactic reactions, have been observed during and following administration of VEKLURY. Signs and symptoms may include hypotension, hypertension, tachycardia, bradycardia, hypoxia, fever, dyspnea, wheezing, angioedema, rash, nausea, diaphoresis, and shivering. Slower infusion rates, with a maximum infusion time of up to 120 minutes, can be considered to potentially prevent these signs and symptoms. Monitor patients under close medical supervision for hypersensitivity reactions during and following administration of VEKLURY. If signs and symptoms of a clinically significant hypersensitivity reaction occur, immediately discontinue administration of VEKLURY and initiate appropriate treatment. ",
	"answer_nature":"Unequivocal Answer"},
	"QApair_54": {
	"QApair_label":"prevent_hypersensitivity_reactions",
	"question_id":"06bfb43c45874774982a6a770ffbb7d0",
	"question":"What is recommended to potentially prevent hypersensitivity reactions?",
	"answer_id":"614746374b4b4d51a35c854bdaaee142",
	"answer":"Slower infusion rates, with a maximum infusion time of up to 120 minutes, can be considered to potentially prevent the signs and symptoms of hypersensitivity reactions. ",
	"answer_nature":"Unequivocal Answer"},
	"QApair_55": {
	"QApair_label":"transaminase_elevations",
	"question_id":"573eefa9048c497db54517f2d2e585a7",
	"question":"Has an increased risk of transaminase elevations been observed?",
	"answer_id":"48cd6c1eacd4462986225fcf1f2400ad",
	"answer":"Transaminase elevations have been observed in healthy volunteers who received 200 mg of VEKLURY followed by 100 mg doses for up to 10 days; the transaminase elevations were mild (Grade 1) to moderate (Grade 2) in severity and resolved upon discontinuation of VEKLURY. Transaminase elevations have also been reported in patients with COVID-19 who received VEKLURY. Because transaminase elevations have been reported as a clinical feature of COVID-19, and the incidence was similar in patients receiving placebo versus VEKLURY in clinical trials of VEKLURY, discerning the contribution of VEKLURY to transaminase elevations in patients with COVID-19 can be challenging.",
	"answer_nature":"Unequivocal Answer"},
	"QApair_56": {
	"QApair_label":"discontinued_use_due_to_transaminase_elevations",
	"question_id":"5b9b972bac2a413b8716970e2c8a661d",
	"question":"When should transaminase elevations lead to discontinued use?",
	"answer_id":"7fdd06c4bf86481fa4dc1a8c247200fa",
	"answer":"Consider discontinuing VEKLURY if ALT levels increase to greater than 10 times the upper limit of normal. Discontinue VEKLURY if ALT elevation is accompanied by signs or symptoms of liver inflammation.",
	"answer_nature":"Unequivocal Answer"},
	"QApair_57": {
	"QApair_label":"antagonist_drugs",
	"question_id":"de1ed7ca891c4a8c81990f485f25722c",
	"question":"Does this drug have antagonist drugs that disrupt its effects?",
	"answer_id":"dd7c6a09a12e41fe8993276a04f28ca2",
	"answer":"Coadministration of VEKLURY and chloroquine phosphate or hydroxychloroquine sulfate is not recommended based on cell culture data demonstrating an antagonistic effect of chloroquine on the intracellular metabolic activation and antiviral activity of VEKLURY",
	"answer_nature":"Unequivocal Answer"},
	"QApair_58": {
	"QApair_label":"sources_of_safety_evidence",
	"question_id":"3490ca9fddeb4db7bf7cc775816b60ad",
	"question":"What are the sources of data that provide evidence of the safety of the drug?",
	"answer_id":"0af09a38f73e42b8abf1ac0c6fb3e7e2",
	"answer":"The safety of VEKLURY is based on data from three Phase 3 studies in 1,313 hospitalized adult subjects with COVID-19, from four Phase 1 studies in 131 healthy adults, and from patients with COVID-19 who received VEKLURY under the Emergency Use Authorization or in a compassionate use program.",
	"answer_nature":"Unequivocal Answer"},
	"QApair_59": {
	"QApair_label":"clinical_studies",
	"question_id":"d66af0aa63174e18bcfab2054a605de2",
	"question":"What clinical studies provide evidence in the labeling for the drug?",
	"answer_id":"77a4442d2159476d8d2c32ee3c19ea38",
	"answer":"NIAID ACTT-1 was a randomized, double-blind, placebo-controlled clinical trial in hospitalized subjects with mild, moderate, and severe COVID-19 treated with VEKLURY (n=532) or placebo (n=516) for up to 10 days. Study GS-US-540-5773 was a randomized, open-label clinical trial in hospitalized subjects with severe COVID-19 treated with VEKLURY 200 mg on Day 1 and 100 mg once daily for 5 (n=200) or 10 days (n=197). Study GS-US-540-5774 was a randomized, open-label clinical trial in hospitalized subjects with moderate COVID-19 treated with VEKLURY 200 mg on Day 1 and 100 mg daily for 5 (n=191) or 10 days (n=193), or standard of care (SOC) only (n=200). Study GS-US-399-5505 was a Phase 1, randomized, blinded, placebo-controlled clinical trial in healthy volunteers (n=20) administered VEKLURY 200 mg on Day 1 and 100 mg for either 4 days or 9 days.",
	"answer_nature":"Unequivocal Answer"},
	"QApair_60": {
	"QApair_label":"emergency_use_authorization",
	"question_id":"e49605cbe60b4866b37ac0d78500899a",
	"question":"Does the drug now have, or has it ever had, an emergency use authorization?",
	"answer_id":"45fa56eb84644dab929c7b10a562dae1",
	"answer":"Yes",
	"answer_nature":"Unequivocal Answer"},
	"QApair_61": {
	"QApair_label":"adverse_reactions_under_emergency_use_authorization",
	"question_id":"d7e2a30357a9498797d2245dc8c1e5b2",
	"question":"What adverse reactions have been identified during use of the drug under Emergency Use Authorization?",
	"answer_id":"b4cece9712db40bb904c241c3e126f1f",
	"answer":"The following adverse reactions have been identified during use of VEKLURY under Emergency Use Authorization: • General disorders and administration site conditions: Administration site extravasation • Skin and subcutaneous tissue disorders: Rash • Immune system disorders: Anaphylaxis, angioedema, infusion-related reactions, hypersensitivity • Investigations: Transaminase elevations",
	"answer_nature":"Unequivocal Answer"},
	"QApair_62": {
	"QApair_label":"drug_drug_interactions",
	"question_id":"a0cdcee0d4ad48ae8ecd3972ea9626b2",
	"question":"What are known drug-drug interactions?",
	"answer_id":"ba7dc7a54c444e3baeafd7c7a9961f0f",
	"answer":"Due to antagonism observed in cell culture, concomitant use of VEKLURY with chloroquine phosphate or hydroxychloroquine sulfate is not recommended. Drug-drug interaction trials of VEKLURY and other concomitant medications have not been conducted in humans. Clinical drug-drug interaction studies have not been performed with VEKLURY.",
	"answer_nature":"Unequivocal Answer"},
	"QApair_63": {
	"QApair_label":"names_of_known_metabolites",
	"question_id":"c85102318d59443f804a1438ed473973",
	"question":"What are the names of known metabolites of the drug?",
	"answer_id":"1c022cfaaec64e4ca7be3d9d8bf7063d",
	"answer":"Metabolites (GS-441524 and GS-704277) ",
	"answer_nature":"Unequivocal Answer"},
	"QApair_64": {
	"QApair_label":"in_vitro_substrates",
	"question_id":"3a1fbdbbbece4208803ff85eed821883",
	"question":"Is the drug or are any of its metabolites known to be substrates for enzymes or proteins in vitro?",
	"answer_id":"fd63d3af805741ab87f1264c1753939c",
	"answer":"In vitro, remdesivir is a substrate for drug metabolizing enzyme CYP3A4, and is a substrate for Organic Anion Transporting Polypeptides 1B1 (OATP1B1) and P-glycoprotein (P-gp) transporters. In vitro, remdesivir is an inhibitor of CYP3A4, OATP1B1, OATP1B3, and MATE1. GS-704277 is a substrate for OATP1B1 and OATP1B3. The clinical relevance of these in vitro assessments has not been established.",
	"answer_nature":"Unequivocal Answer"},
	"QApair_65": {
	"QApair_label":"in_vitro_drug_metabolizing_enzyme_binding",
	"question_id":"f2d5438083aa4657adbe7052ba28b257",
	"question":"What are any drug metabolizing enzymes for which the drug or its metabolites are known to be substrates?",
	"answer_id":"35f14917d03547b189af98deca2b363d",
	"answer":"In vitro, remdesivir is a substrate for drug metabolizing enzyme CYP3A4,",
	"answer_nature":"Unequivocal Answer"},
	"QApair_67": {
	"QApair_label":"mechanism_of_action",
	"question_id":"2f2f2bb9ee2a4b85811a1d1d186dc980",
	"question":"What is the drug's mechanism of action?",
	"answer_id":"1d8724d472e0489ea35cfe9d0fdc7b7e",
	"answer":"Remdesivir is an inhibitor of the SARS-CoV-2 RNA-dependent RNA polymerase (RdRp), which is essential for viral replication. Remdesivir is an adenosine nucleotide prodrug that distributes into cells where it is metabolized to a nucleoside monophosphate intermediate by carboxyesterase 1 and/or cathepsin A, depending upon the cell type. The nucleoside monophosphate is subsequently phosphorylated by cellular kinases to form the pharmacologically active nucleoside triphosphate metabolite (GS-443902). Remdesivir triphosphate (RDV-TP) acts as an analog of adenosine triphosphate (ATP) and competes with high selectivity (3.65-fold) over the natural ATP substrate for incorporation into nascent RNA chains by the SARS-CoV-2 RNA-dependent RNA polymerase, which results in delayed chain termination (position i+3) during replication of the viral RNA. In a biochemical assay assessing RDV-TP incorporation by the MERS-CoV RdRp complex, RDV-TP inhibited RNA synthesis with an IC50 value of 0.032 μM. RDV-TP can also inhibit viral RNA synthesis following its incorporation into the template viral RNA as a result of read-through by the viral polymerase that may occur at higher nucleotide concentrations. When remdesivir nucleotide is present in the viral RNA template, the efficiency of incorporation of the complementary natural nucleotide is compromised, thereby inhibiting viral RNA synthesis. Remdesivir triphosphate is a weak inhibitor of mammalian DNA and RNA polymerases, including human mitochondrial RNA polymerase.",
	"answer_nature":"Unequivocal Answer"},
	"QApair_68": {
	"QApair_label":"antiviral_activity",
	"question_id":"856bdf2c960c4219b5c5a2b59d6b4126",
	"question":"What is known about the antiviral activity of the drug?",
	"answer_id":"8132864571d8483e9b8e0cea03531ee9",
	"answer":"Remdesivir exhibited cell culture antiviral activity against a clinical isolate of SARS‐CoV‐2 in primary human airway epithelial (HAE) cells with a 50% effective concentration (EC50) of 9.9 nM after 48 hours of treatment. Remdesivir inhibited the replication of SARS-CoV-2 in the continuous human lung epithelial cell line Calu-3 with an EC50 value of 280 nM after 72 hours of treatment. The antiviral activity of remdesivir was antagonized by chloroquine phosphate in a dose-dependent manner when the two drugs were co-incubated at clinically relevant concentrations in HEp-2 cells infected with respiratory syncytial virus (RSV). Higher remdesivir EC50 values were observed with increasing concentrations of chloroquine phosphate. Increasing concentrations of chloroquine phosphate reduced formation of remdesivir triphosphate in normal human bronchial epithelial cells.",
	"answer_nature":"Equivocal Answer"},
	"QApair_69": {
	"QApair_label":"clinical_drug_resistance_data",
	"question_id":"8a714807f3ed40899387ff8f0021375a",
	"question":"What clincal trial data are available on the development of resistance to tthe drug?",
	"answer_id":"680c96bf40714bc5b4c1f117482e1306",
	"answer":"No clinical data are available on the development of SARS-CoV-2 resistance to remdesivir. The cell culture development of SARS-CoV-2 resistance to remdesivir has not been assessed to date.",
	"answer_nature":"Unequivocal Answer"},
	"QApair_70": {
	"QApair_label":"laboratory_drug_resistance_data",
	"question_id":"0ae2c1bd9beb4c45981307f93ee67a82",
	"question":"What laboratory data are available on the development of resistance to the drug?",
	"answer_id":"c0922c881c814e78ba48407c88631512",
	"answer":"Cell culture resistance profiling of remdesivir using the rodent CoV murine hepatitis virus identified two substitutions (F476L and V553L) in the viral RNA-dependent RNA polymerase at residues conserved across CoVs. The combination of these two substitutions conferred a 5.6-fold reduction in susceptibility to remdesivir. The mutant viruses showed reduced viral fitness in cell culture, and introduction of the corresponding substitutions (F480L and V557L) into SARS-CoV resulted in 6-fold reduction in susceptibility to remdesivir in cell culture and attenuated SARS-CoV pathogenesis in a mouse model.",
	"answer_nature":"Equivocal Answer"},
	"QApair_71": {
	"QApair_label":"use_in_pregnancy",
	"question_id":"28ea363d69fd46ee95ee224449b2f5e2",
	"question":"What is known about use of the drug in pregnancy?",
	"answer_id":"89194d74660f47f98fce585745b639ed",
	"answer":"Risk Summary Available data from published case reports and compassionate use of remdesivir in pregnant women are insufficient to evaluate for a drug-associated risk of major birth defects, miscarriage, or adverse maternal or fetal outcomes. In nonclinical reproductive toxicity studies, remdesivir demonstrated no adverse effect on embryo-fetal development when administered to pregnant animals at systemic exposures (AUC) of the predominant circulating metabolite of remdesivir (GS-441524) that were 4 times (rats and rabbits) the exposure in humans at the recommended human dose (RHD) (see Data). The estimated background risk of major birth defects and miscarriage for the indicated population is unknown. All pregnancies have a background risk of birth defect, loss, or other adverse outcomes. In the U.S. general population, the estimated background risk of major birth defects and miscarriage in clinically recognized pregnancies is 2 to 4% and 15 to 20%, respectively. Clinical Considerations: Disease-associated maternal and/or embryo-fetal risk, Pregnant women hospitalized with COVID-19 are at risk for serious morbidity and mortality, Data: Animal Data: Remdesivir was administered via intravenous injection to pregnant rats and rabbits (up to 20 mg/kg/day) on Gestation Days 6 through 17, and 7 through 20, respectively, and also to rats from Gestation Day 6 to Lactation/Post-partum Day 20. No adverse effects on embryo-fetal (rats and rabbits) or pre postnatal (rats) development were observed in rats and rabbits at nontoxic doses in pregnant animals. During organogenesis, exposures to the predominant circulating metabolite (GS- 441524) were 4 times higher (rats and rabbits) than the exposure in humans at the RHD. In a pre/postnatal development study, exposures to the predominant circulating metabolite of remdesivir (GS-441524) were similar to the human exposures at the RHD.",
	"answer_nature":"Equivocal Answer"},
	"QApair_72": {
	"QApair_label":"use_during_lactation",
	"question_id":"e3a793ce8c5c42d49e13bed294cdf429",
	"question":"What is known about exposure to the drug or its metabolites via breastmilk?",
	"answer_id":"28df23f817cd4ea994e451013dbed923",
	"answer":"There are no available data on the presence of remdesivir in human milk, the effects on the breastfed infant, or the effects on milk production. In animal studies, remdesivir and metabolites have been detected in the nursing pups of mothers given remdesivir, likely due to the presence of remdesivir in milk (see Data). The developmental and health benefits of breastfeeding should be considered along with the mother’s clinical need for VEKLURY and any potential adverse effects on the breastfed child from VEKLURY or from the underlying maternal condition. Breastfeeding individuals with COVID-19 should follow practices according to clinical guidelines to avoid exposing the infant to COVID-19. Animal Data: Remdesivir and its metabolites were detected in the plasma of nursing rat pups, likely due to the presence of remdesivir and/or its metabolites in milk, following daily intravenous administration of remdesivir to pregnant rats from Gestation Day 6 to Lactation Day 20. Exposures in nursing pups were approximately 1% that of maternal exposure on Lactation Day 10.",
	"answer_nature":"Equivocal Answer"},
	"QApair_73": {
	"QApair_label":"use_in_pediatric_patients",
	"question_id":"85d2af9e834f454dab4b8ff9ea29e8b7",
	"question":"Is the drug safe for children?",
	"answer_id":"27656b676d4447bda250ba2f77caa7be",
	"answer":"The safety and effectiveness of VEKLURY have not been established in pediatric patients younger than 12 years of age or weighing less than 40 kg.",
	"answer_nature":"Equivocal Answer"},
	"QApair_74": {
	"QApair_label":"use_in_geriatric_patients",
	"question_id":"43dbab66bf1846f3b47a0f14ed8e7326",
	"question":"Is the drug safe for the elderly?",
	"answer_id":"5be77cf0b16c48aa9ad2c0e10a3d852d",
	"answer":"Reported clinical experience has not identified differences in responses between the elderly and younger patients. No dosage adjustment is required in patients over the age of 65 years. In general, appropriate caution should be exercised in the administration of VEKLURY and monitoring of elderly patients, reflecting the greater frequency of decreased hepatic, renal, or cardiac function, and of concomitant disease or other drug therapy.",
	"answer_nature":"Equivocal Answer"},
	"QApair_75": {
	"QApair_label":"use_in_renal_impairment",
	"question_id":"bdd172aca5ac40ae8d091d607aa2657a",
	"question":"Is the drug safe for those with renail impairment of the kidneys?",
	"answer_id":"1a1404b6d0fe4e7691ead135ad8380be",
	"answer":"The pharmacokinetics of VEKLURY have not been evaluated in patients with renal impairment. Patients with eGFR greater than or equal to 30 mL per minute have received VEKLURY for treatment of COVID-19 with no dose adjustment of VEKLURY. All patients must have an eGFR determined before starting VEKLURY and while receiving VEKLURY as clinically appropriate. Because the excipient betadex sulfobutyl ether sodium is renally cleared and accumulates in patients with decreased renal function, administration of drugs formulated with betadex sulfobutyl ether sodium (such as VEKLURY) is not recommended in patients with eGFR less than 30 mL per minute.",
	"answer_nature":"Equivocal Answer"},
	"QApair_76": {
	"QApair_label":"use_in_hepatic_impairment",
	"question_id":"2fe30143cc784f84b36d556b9f826184",
	"question":"Is the drug safe for those with hepatic impairment of the liver?",
	"answer_id":"579b24f0157e415eb95a2e4eda71cfa9",
	"answer":"The pharmacokinetics of VEKLURY have not been evaluated in patients with hepatic impairment. Perform hepatic laboratory testing in all patients before starting VEKLURY and while receiving VEKLURY as clinically appropriate.",
	"answer_nature":"Equivocal Answer"},
	"QApair_77": {
	"QApair_label":"managing_overdose",
	"question_id":"fb2a3fbc2a6545a58afc4ce4fdac2a4d",
	"question":"What should be done in cases of overdose?",
	"answer_id":"4e6f59d2e9ac48598533fe7d1e20ba83",
	"answer":"There is no human experience of acute overdosage with VEKLURY. Treatment of overdose with VEKLURY should consist of general supportive measures including monitoring of vital signs and observation of the clinical status of the patient. There is no specific antidote for overdose with VEKLURY.",
	"answer_nature":"Equivocal Answer"},
	"QApair_78": {
	"QApair_label":"chemical_name",
	"question_id":"db242f34033e46f39c997c47e5a3a97a",
	"question":"What is the chemical name of the drug?",
	"answer_id":"ef138acdfcd844e796ae4f76cbc2976c",
	"answer":"2-ethylbutyl N-{(S)-[2-C-(4-aminopyrrolo[2,1-f][1,2,4]triazin-7-yl)-2,5- anhydro-d-altrononitril-6-O-yl]phenoxyphosphoryl}-L-alaninate",
	"answer_nature":"Unequivocal Answer"},
	"QApair_79": {
	"QApair_label":"molecular_formula",
	"question_id":"9bf8917a388448468b65300d912ea832",
	"question":"What is the molecular formula of the drug?",
	"answer_id":"b562fe6a9dec400dbb6995ec82dfefb5",
	"answer":"C27H35N6O8P",
	"answer_nature":"Unequivocal Answer"},
	"QApair_80": {
	"QApair_label":"molecular_weight",
	"question_id":"c20b7ff322ae496699112289ae1f7095",
	"question":"What is the molecular weight of the drug?",
	"answer_id":"7d81804e7e6a47f1b0cc0118a90b1555",
	"answer":"602.6 g/mol",
	"answer_nature":"Unequivocal Answer"},
	"QApair_81": {
	"QApair_label":"general_therapeutic_class",
	"question_id":"35432f4536564d7494bde33c57e5e029",
	"question":"What is the general therapeutic class of the drug?",
	"answer_id":"b2dd5754d69846918ea8dc4b61a554cb",
	"answer":"antiviral",
	"answer_nature":"Unequivocal Answer"},
	"QApair_82": {
	"QApair_label":"drug_description",
	"question_id":"fe3b2cdfe44e4482b032b8337f36a19f",
	"question":"What is a description of the drug?",
	"answer_id":"f5b87facd51341b7b5176d489b914051",
	"answer":"VEKLURY contains remdesivir, a SARS-CoV-2 nucleotide analog RNA polymerase inhibitor.",
	"answer_nature":"Unequivocal Answer"},
	"QApair_83": {
	"QApair_label":"pharmacodynamics",
	"question_id":"1bf7b8a369f14a6cb5060c41fcfb1f36",
	"question":"What is known about the pharmacodynamics of the drug?",
	"answer_id":"282cbff676b24122bc7cdbdf9c1290b9",
	"answer":"Remdesivir and metabolites exposure-response relationships and the time course of pharmacodynamics response are unknown.",
	"answer_nature":"Unequivocal Answer"},
	"QApair_84": {
	"QApair_label":"carcinogenesis_and_mutagenesis",
	"question_id":"ff78f083c2e9452886de7e3a22f9b45a",
	"question":"What is known about the carcinogenesis and mutagenesis of the drug?",
	"answer_id":"1104b948f611461b8f8f64908caac23f",
	"answer":"Given the short-term administration of VEKLURY for the treatment of COVID-19, long-term animal studies to evaluate the carcinogenic potential of remdesivir were not conducted. Remdesivir was not genotoxic in a battery of assays, including bacterial mutagenicity, chromosome aberration using human peripheral blood lymphocytes, and in vivo rat micronucleus assays.",
	"answer_nature":"Equivocal Answer"},
	"QApair_85": {
	"QApair_label":"impairment_of_fertility",
	"question_id":"073b0e9ce2834af5857249cdd5e9f019",
	"question":"What is known about the drug and impairment of fertility?",
	"answer_id":"709414c0f8d24dd58d2c67e45f7e461c",
	"answer":"Nonclinical toxicity studies in rats demonstrated no adverse effect on male fertility at exposures of the predominant circulating metabolite (GS-441524) approximately 2 times the exposure in humans at the RHD. Reproductive toxicity, including decreases in corpora lutea, numbers of implantation sites, and viable embryos, was seen when remdesivir was administered by daily intravenous administration at a systemically toxic dose (10 mg/kg) in female rats 14 days prior to mating and during conception; exposures of the predominant circulating metabolite (GS-441524) were 1.3 times the exposure in humans at the RHD.",
	"answer_nature":"Equivocal Answer"},
	"QApair_86": {
	"QApair_label":"coded_and_structured_indication",
	"question_id":"b90a641e0f2b4331a7921033cfc1c4ab",
	"question":"What is the coded and structured indication?",
	"answer_id":"570b69a756c4418b879129b9eeb3f080",
	"answer":"Condition: COVID-19 Use: Treatment Weight: > 40 kg Age: > 11 years Stage: Hospitalized",
	"answer_nature":"Unequivocal Answer"}
	};

  // arr question/answers
var objectOutput = [];  // empty array
	// check user input
	if (input === 0) {// 0 = send the whole remdesivir_label_object
		return remdesivir_label_object;// test in Node.js
		//return remdesivir_label_object;
	} else if (input === 1) {// 1 = send all of the question IDs as a list
		for (var output in remdesivir_label_object) {
			objectOutput.push({question_id:remdesivir_label_object[output].question_id});
		}
		return JSON.stringify(objectOutput);
	} else if (input === 2) {// 2 = send all of the question IDs and questions
		for (var output in remdesivir_label_object) {
		  objectOutput.push({question_id:remdesivir_label_object[output].question_id,question:remdesivir_label_object[output].question});
    }
		return JSON.stringify(objectOutput);
	} else if (input === 3) {// 3 = send all of the answer IDs as a list
		for (var output in remdesivir_label_object) {
			objectOutput.push({answer_id:remdesivir_label_object[output].answer_id});
		}
		return JSON.stringify(objectOutput);
	} else if (input === 4) {// 4 = send all of the answer IDs and answers
		for (var output in remdesivir_label_object) {
			objectOutput.push({answer_id:remdesivir_label_object[output].answer_id,answer:remdesivir_label_object[output].answer});
		}
		return JSON.stringify(objectOutput);
	} else {// try finding question/answer identifier = send the single object
		var found = false;
		for (var output in remdesivir_label_object) {
			if (input === remdesivir_label_object[output].question_id ||
			input === remdesivir_label_object[output].answer_id) {
				objectOutput.push(remdesivir_label_object[output]);
				//return remdesivir_label_object[output];
				found = true;
			}
		}// if not found = send error message
		if (found) {return JSON.stringify(objectOutput);}
		else {
		return("\nInput error. Please try again.\n\
		\n0 = send the whole remdesivir_label_object\
		\n1 = send all of the question IDs as a list\
		\n2 = send all of the question IDs and questions\
		\n3 = send all of the answer IDs as a list\
		\n4 = send all of the answer IDs and answers\
		\nquestion/answer identifier = send the single object");
		}
	}
}
