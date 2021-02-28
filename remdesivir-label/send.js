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
function send(input) {
	// temp json data
	var remdesivir_label_object = {
	"QApair_1": {
	"name":"brand_name",
	"question_id":"b8408b213e84449dbb09fe9efc8fce44",
	"question":"What is its brand name?",
	"answer_id":"95dca543c2344635b15a90e3c2fac164",
	"answer":"VEKLURY",
	"answer_nature":"Unequivocal Answer"},
	"QApair_2": {
	"name":"generic_name",
	"question_id":"ad47b354ee714cc8b7ad6ed73ca889c9",
	"question":"What is its generic name?",
	"answer_id":"0448074035454eacabeddaabb6777820",
	"answer":"remdesivir",
	"answer_nature":"Unequivocal Answer"},
	"QApair_3": {
	"name":"included_products",
	"question_id":"b130fa66457849efb6272ec7deca93e1",
	"question":"What drug products are included?",
	"answer_id":"74d406dff7cd4774a538f1fe8bb90cdc",
	"answer":"VEKLURY® (remdesivir) for injection, for intravenous use VEKLURY® (remdesivir) injection, for intravenous use",
	"answer_nature":"Unequivocal Answer"},
	"QApair_4": {
	"name":"initial_united_states_approval",
	"question_id":"7df59111730a49699f6864257c73738e",
	"question":"What year was its initial U.S. approval?",
	"answer_id":"bd10d1988c90413599e83481a46b1546",
	"answer":"2020",
	"answer_nature":"Unequivocal Answer"},
	"QApair_5": {
	"name":"indication",
	"question_id":"656d693bbe8f49b4b2f7f8527655636e",
	"question":"What is its indication?",
	"answer_id":"7c5573a83ba54ac5b8b412988bd8f29c",
	"answer":"VEKLURY is indicated for adults and pediatric patients (12 years of age and older and weighing at least 40 kg) for the treatment of coronavirus disease 2019 (COVID-19) requiring hospitalization.",
	"answer_nature":"Unequivocal Answer"},
	"QApair_6": {
	"name":"where_administered",
	"question_id":"0109d944130344c2869ebc8e9329ac91",
	"question":"Where should it be administered?",
	"answer_id":"b2d9ea3ac32e4e2591342d7998a461d3",
	"answer":"VEKLURY should only be administered in a hospital or in a healthcare setting capable of providing acute care comparable to inpatient hospital care.",
	"answer_nature":"Unequivocal Answer"},
	"QApair_7": {
	"name":"testing_before_initiatiing_and_during_treatment",
	"question_id":"a79effe7b17d4a778e13dc8858b6d225",
	"question":"What testing needs to be done before Initiating and during treatment?",
	"answer_id":"3927118dce35411b90dda96143659f4f",
	"answer":"Determine eGFR in all patients before starting VEKLURY and monitor while receiving VEKLURY as clinically appropriate. Perform hepatic laboratory testing in all patients before starting VEKLURY and while receiving VEKLURY as clinically appropriate.Determine prothrombin time in all patients before starting VEKLURY and monitor while receiving VEKLURY as clinically appropriate.",
	"answer_nature":"Equivocal Answer"},
	"QApair_8": {
	"name":"kidney_function_testing",
	"question_id":"c3e78446f57f4580872e8f085dc02863",
	"question":"What testing of kidney function needs to be done before initiating and during treatment?",
	"answer_id":"c4bff4466b1e480191d4738916c6d90c",
	"answer":"Determine eGFR in all patients before starting VEKLURY and monitor while receiving VEKLURY as clinically appropriate.",
	"answer_nature":"Equivocal Answer"},
	"QApair_9": {
	"name":"liver_function_testing",
	"question_id":"42799976d99f4b8bb900584e4c4ba39f",
	"question":"What testing of liver function needs to be done before initiating and during treatment?",
	"answer_id":"d1f4432d4d4443e99ec222c2c12c431c",
	"answer":"Perform hepatic laboratory testing in all patients before starting VEKLURY and while receiving VEKLURY as clinically appropriate.",
	"answer_nature":"Equivocal Answer"},
	"QApair_10": {
	"name":"blood_coagulation_testing",
	"question_id":"16bf1bea6419487ea70e8fb869d4a5ef",
	"question":"What testing related to blood coagulation needs to be done before initiating and during treatment? ",
	"answer_id":"837c83bfc4fd427e86b5a92cb41c23f5",
	"answer":"Determine prothrombin time in all patients before starting VEKLURY and monitor while receiving VEKLURY as clinically appropriate.",
	"answer_nature":"Equivocal Answer"},
	"QApair_11": {
	"name":"recommended_dosage",
	"question_id":"ee8f02b6e42c4c8895faa75fd29b7806",
	"question":"What is the recommended dosage?",
	"answer_id":"3c22769075b848f6a3a57ae1c5748257",
	"answer":"The recommended dosage for adults and pediatric patients 12 years of age and older and weighing at least 40 kg is a single loading dose of VEKLURY 200 mg on Day 1 via intravenous infusion followed by once-daily maintenance doses of VEKLURY 100 mg from Day 2 via intravenous infusion.",
	"answer_nature":"Unequivocal Answer"},
	"QApair_12": {
	"name":"treatment_duration",
	"question_id":"16e23675e7794705b4bfeb119321c466",
	"question":"What is the recommended treatment duration?",
	"answer_id":"955a8518da1342feb6094739eeb33477",
	"answer":"The recommended treatment duration for patients not requiring invasive mechanical ventilation and/or extracorporeal membrane oxygenation (ECMO) is 5 days. If a patient does not demonstrate clinical improvement, treatment may be extended for up to 5 additional days for a total treatment duration of up to 10 days. The recommended total treatment duration for patients requiring invasive mechanical ventilation and/or ECMO is 10 days.",
	"answer_nature":"Unequivocal Answer"},
	"QApair_13": {
	"name":"treatment_duration_when_no_mechanical_ventilation",
	"question_id":"206beaa6195c48679d2330e594b0cd6b",
	"question":"What is the recommended treatment duration for patients not requiring invasive mechanical ventilation and/or extracorporeal membrane oxygenation (ECMO)?",
	"answer_id":"eb895d7168c548909e2e2bc2def46c45",
	"answer":"5 Days",
	"answer_nature":"Unequivocal Answer"},
	"QApair_14": {
	"name":"treatment_duration_extension",
	"question_id":"c8fd0d1278164e7b87da37540991b846",
	"question":" What is the recommended treatment duration extension period if a patient does not demonstrate clinical improvement?",
	"answer_id":"e2d6a01b8b564353b4c4f6c9c3c24c6d",
	"answer":"Treatment may be extended for up to 5 additional days for a total treatment duration of up to 10 days.",
	"answer_nature":"Unequivocal Answer"},
	"QApair_15": {
	"name":"treatment_duration_when_with_mechanical_ventilation",
	"question_id":"a21e528d802d41549a1c0d79e2beec0b",
	"question":"What is the recommended treatment duration for patients requiring invasive mechanical ventilation and/or extracorporeal membrane oxygenation (ECMO)?",
	"answer_id":"32a0a695df754ed7b2caf7bcc1906312",
	"answer":"The recommended total treatment duration for patients requiring invasive mechanical ventilation and/or ECMO is 10 days.",
	"answer_nature":"Unequivocal Answer"},
	"QApair_16": {
	"name":"need_dilution",
	"question_id":"5f61e7990a4d465fa0d5aeb109c682d0",
	"question":"Does the drug product need to be diluted?",
	"answer_id":"7ff558a6ce414841bf641b6bef08ab81",
	"answer":"VEKLURY must be diluted prior to intravenous infusion.",
	"answer_nature":"Unequivocal Answer"},
	"QApair_17": {
	"name":"renal_impairment",
	"question_id":"cad9862cefc6415dae2b47cc839279ee",
	"question":"What is recommended in cases of renal impairment?",
	"answer_id":"d30fc2e72c2e476a96984e8b270ba634",
	"answer":"VEKLURY is not recommended in patients with eGFR less than 30 mL per minute.",
	"answer_nature":"Unequivocal Answer"},
	"QApair_18": {
	"name":"supervision",
	"question_id":"7ef52c4f2daa482696b8675fae9a434d",
	"question":"What supervision is required for use?",
	"answer_id":"50271bed90bf4732bf555abb5eb331f1",
	"answer":"VEKLURY must be prepared and administered under the supervision of a healthcare provider.",
	"answer_nature":"Unequivocal Answer"},
	"QApair_19": {
	"name":"route_of_administration",
	"question_id":"a1ae260b2b754f44bcc50a10df9f0c16",
	"question":"What is the required route of administration?",
	"answer_id":"f0774b9d0ecd4f97944cf7f935382cb4",
	"answer":"VEKLURY must be administered via intravenous infusion only. Do not administer by any other route.",
	"answer_nature":"Unequivocal Answer"},
	"QApair_20": {
	"name":"number_of_dosage_forms",
	"question_id":"1d737a212e4347aa965cd2874b93c4f7",
	"question":"How many dosage forms are available?",
	"answer_id":"ebd02a67b64b473aad8ce9f8eace957e",
	"answer":"VEKLURY is available in two dosage forms.",
	"answer_nature":"Unequivocal Answer"},
	"QApair_21": {
	"name":"dosage_forms",
	"question_id":"fc353220d9954f94a14089b8411fcadb",
	"question":"What are the available dosage forms?",
	"answer_id":"e7461650519b4e6680fc44f935b1c6b6",
	"answer":"VEKLURY for injection (supplied as 100 mg lyophilized powder in vial) needs to be reconstituted with Sterile Water for Injection prior to diluting in a 100 mL or 250 mL 0.9% sodium chloride infusion bag AND VEKLURY for injection (supplied as 100 mg lyophilized powder in vial) needs to be reconstituted with Sterile Water for Injection prior to diluting in a 100 mL or 250 mL 0.9% sodium chloride infusion bag.",
	"answer_nature":"Unequivocal Answer"},
	"QApair_22": {
	"name":"drug_product_inspection",
	"question_id":"f2570e902ffd433abfb554c32afbfbda",
	"question":"How should parenteral drug products be inspected?",
	"answer_id":"b25e80145c434a35a1015376255e7c2b",
	"answer":"Parenteral drug products should be inspected visually for particulate matter and discoloration prior to administration.",
	"answer_nature":"Unequivocal Answer"},
	"QApair_23": {
	"name":"when_to_discard",
	"question_id":"313babc40dfc46039269a49d187af4b7",
	"question":"When should the drug product be discarded?",
	"answer_id":"8ed2ac3a21e342ceb7840097c33ff43a",
	"answer":"Discard the vial if the lyophilized powder or solution is discolored or contains particulate matter.",
	"answer_nature":"Unequivocal Answer"},
	"QApair_24": {
	"name":"what_products_look_like_prior_to_dilution",
	"question_id":"592501e16f7343b18e58db19d57586a9",
	"question":"What should the drug products look like prior to dilution?",
	"answer_id":"b8edd72ee7a64b6696b0f53d9b652848",
	"answer":"Prior to dilution in a 0.9% sodium chloride infusion bag, reconstituted VEKLURY for injection and VEKLURY injection solution should be a clear, colorless to yellow solution, free of visible particles.",
	"answer_nature":"Unequivocal Answer"},
	"QApair_25": {
	"name":"general_preparation",
	"question_id":"f6f5c822717440b0b0247c434588caf2",
	"question":"How are these products generally prepared?",
	"answer_id":"d95933a3dc3245dda5aed34dbd1e282c",
	"answer":"Prepare diluted solution under aseptic conditions and on same day as administration.",
	"answer_nature":"Unequivocal Answer"},
	"QApair_26": {
	"name":"powder_reconstitution_procedures",
	"question_id":"c669a0a8a1544b44b834b3a7131c6f14",
	"question":"When supplied as a lyophilized powder in a vial, how should the dosage form be reconstituted?",
	"answer_id":"0bdb4ae353aa4f28b52cc7c898b29429",
	"answer":"VEKLURY for Injection (Supplied as 100 mg Lyophilized Powder in Vial) Reconstitution Instructions Remove the required number of single-dose vial(s) from storage. For each vial: • Aseptically reconstitute VEKLURY lyophilized powder by adding 19 mL of Sterile Water for Injection using a suitably sized syringe and needle per vial. • Only use Sterile Water for Injection to reconstitute VEKLURY lyophilized powder. • Discard the vial if a vacuum does not pull the Sterile Water for Injection into the vial. • Immediately shake the vial for 30 seconds. • Allow the contents of the vial to settle for 2 to 3 minutes. A clear solution should result. • If the contents of the vial are not completely dissolved, shake the vial again for 30 seconds and allow the contents to settle for 2 to 3 minutes. Repeat this procedure as necessary until the contents of the vial are completely dissolved. Discard the vial if the contents are not completely dissolved. • Following reconstitution, each vial contains 100 mg/20 mL (5 mg/mL) of remdesivir solution. • Use reconstituted product immediately to prepare the diluted drug product",
	"answer_nature":"Unequivocal Answer"},
	"QApair_27": {
	"name":"reconstitute_with",
	"question_id":"9caba88f2edd41bcab3618da60e673b1",
	"question":"What should be used to reconstitute the lyophilized powder?",
	"answer_id":"4fa22cd184c842d1b13d20e2bee0d67c",
	"answer":"Only use Sterile Water for Injection to reconstitute VEKLURY lyophilized powder.",
	"answer_nature":"Unequivocal Answer"},
	"QApair_28": {
	"name":"preservatives",
	"question_id":"55dadeea4c1f421da389b51cf6184f71",
	"question":"Are there preservatives or bacteriostatic agents in the products?",
	"answer_id":"cb552d4667d94df5a29cb9b53fd16e14",
	"answer":"There is no preservative or bacteriostatic agent present in this product,",
	"answer_nature":"Unequivocal Answer"},
	"QApair_29": {
	"name":"aseptic_technique",
	"question_id":"9dc07efbdd5342849204b822c4675020",
	"question":"Must aseptic technique be used to prepare the products?",
	"answer_id":"7acadd1a9e724ebca3dd28d097177009",
	"answer":"Aseptic technique must be used in preparation of the final parenteral solution.",
	"answer_nature":"Unequivocal Answer"},
	"QApair_30": {
	"name":"immediate_use",
	"question_id":"f3d6ba727a2f4a24969cdb4f1c4297b4",
	"question":"Is immediate use after preparation advised?",
	"answer_id":"2db88b47b9f6412393e7444712a3a6eb",
	"answer":"It is always recommended to administer intravenous medication immediately after preparation when possible.",
	"answer_nature":"Unequivocal Answer"},
	"QApair_31": {
	"name":"reconstituted_product_dilution",
	"question_id":"44a6079366fd4b9bb7a1390cc973fb1e",
	"question":"How should the reconstituted lyophilized product be further diluted?",
	"answer_id":"3cb881f5a0b24d93af656715245727a8",
	"answer":"Reconstituted VEKLURY for injection, containing 100 mg/20 mL remdesivir solution, must be further diluted in either a 100 mL or 250 mL 0.9% sodium chloride infusion bag.",
	"answer_nature":"Unequivocal Answer"},
	"QApair_32": {
	"name":"recommended_diluents_for_reconstituted_product_dilution",
	"question_id":"1e79b3e613ac4c7584fdcd070872e58f",
	"question":"What are the recommended diluents for the reconstituted lyophilized product?",
	"answer_id":"3cb881f5a0b24d93af656715245727a8",
	"answer":"Reconstituted VEKLURY for injection, containing 100 mg/20 mL remdesivir solution, must be further diluted in either a 100 mL or 250 mL 0.9% sodium chloride infusion bag.",
	"answer_nature":"Unequivocal Answer"},
	"QApair_33": {
	"name":"reconstituted_loading_dose_in_250_mL",
	"question_id":"207583ef776b4c3197889ee04f613175",
	"question":"How should a loading dose of 200mg of reconstituted lyophilized VEKLURY in 250mL 0.9% Sodium Chloride be prepared?",
	"answer_id":"b9f44c24c84048febd9ef0426a0b037a",
	"answer":"For a Loading Dose of 200mg (2 Vials) in a 250mL 0.9% Sodium Chloride infusion bag • Withdraw and discard 40mL of 0.9% sodium chloride from the bag using an appropriately sized syringe and needle. • Withdraw the 40mL volume of reconstituted VEKLURY for injection from the two VEKLURY vials using an appropriately sized syringe. Discard any unused portion remaining in the reconstituted vial. • Transfer the 40mL volume of reconstituted VEKLURY for injection to the selected infusion bag. Gently invert the bag 20 times to mix the solution in the bag. Do not shake.",
	"answer_nature":"Unequivocal Answer"},
	"QApair_34": {
	"name":"reconstitued_loading_dose_in_100_mL",
	"question_id":"3ee84b9af79f469da441cce0b7491d4e",
	"question":"How should a loading dose of 200mg of reconstituted lyophilized VEKLURY in 100mL 0.9% Sodium Chloride be prepared?",
	"answer_id":"e5c64361c28746af8e185913ef4086b8",
	"answer":"For a Loading Dose of 200mg (2 Vials) in a 100mL 0.9% Sodium Chloride infusion bag • Withdraw and discard 40mL of 0.9% sodium chloride from the bag using an appropriately sized syringe and needle. • Withdraw the 40mL volume of reconstituted VEKLURY for injection from the two VEKLURY vials using an appropriately sized syringe. Discard any unused portion remaining in the reconstituted vial. • Transfer the 40mL volume of reconstituted VEKLURY for injection to the selected infusion bag. Gently invert the bag 20 times to mix the solution in the bag. Do not shake.",
	"answer_nature":"Unequivocal Answer"},
	"QApair_35": {
	"name":"reconstituted_maintenance_dose_in_250_mL",
	"question_id":"354656e3327b408d81975ca27106537e",
	"question":"How should a maintenance dose of 200mg of reconstituted lyophilized VEKLURY in 250mL 0.9% Sodium Chloride be prepared?",
	"answer_id":"bab985c271a94df7a8e23ac254593c72",
	"answer":"For a Maintenance Dose of 100mg (1 Vial) in a 250mL 0.9% Sodium Chloride infusion bag • Withdraw and discard 20mL of 0.9% sodium chloride from the bag using an appropriately sized syringe and needle. • Withdraw the 20mL volume of reconstituted VEKLURY for injection from the one VEKLURY vial using an appropriately sized syringe. Discard any unused portion remaining in the reconstituted vial. • Transfer the 20mL volume of reconstituted VEKLURY for injection to the selected infusion bag. Gently invert the bag 20 times to mix the solution in the bag. Do not shake.",
	"answer_nature":"Unequivocal Answer"},
	"QApair_36": {
	"name":"reconstituted_maintenance_dose_in_100_mL",
	"question_id":"d0af9e9698c54eadb67fb1be72531517",
	"question":"How should a maintenance dose of 200mg of reconstituted lyophilized VEKLURY in 100mL 0.9% Sodium Chloride be prepared?",
	"answer_id":"d4e5280cd4ce40ba9977d47e6693c0bc",
	"answer":"For a Maintenance Dose of 100mg (1 Vial) in a 100mL 0.9% Sodium Chloride infusion bag • Withdraw and discard 20mL of 0.9% sodium chloride from the bag using an appropriately sized syringe and needle. • Withdraw the 20mL volume of reconstituted VEKLURY for injection from the one VEKLURY vial using an appropriately sized syringe. Discard any unused portion remaining in the reconstituted vial. • Transfer the 20mL volume of reconstituted VEKLURY for injection to the selected infusion bag. Gently invert the bag 20 times to mix the solution in the bag. Do not shake.",
	"answer_nature":"Unequivocal Answer"},
	"QApair_37": {
	"name":"prepared_infusion_solution_stability",
	"question_id":"305f4c2e5ae940539686b409e634ec8b",
	"question":"What is the stability of the prepared infusion solution of VEKLURY?",
	"answer_id":"ce519bb9d44f475bb4c3b0b8b5399fb6",
	"answer":"The prepared infusion solution is stable for 24 hours at room temperature (20°C to 25°C [68°F to 77°F]) or 48 hours at refrigerated temperature (2°C to 8°C [36°F to 46°F]).",
	"answer_nature":"Unequivocal Answer"},
	"QApair_38": {
	"name":"storage_temperatures",
	"question_id":"67d23a9fa988457180f1e20935889035",
	"question":"At what temperatures should the prepared infusion solution of VEKLURY be kept?",
	"answer_id":"ce519bb9d44f475bb4c3b0b8b5399fb6",
	"answer":"The prepared infusion solution is stable for 24 hours at room temperature (20°C to 25°C [68°F to 77°F]) or 48 hours at refrigerated temperature (2°C to 8°C [36°F to 46°F]).",
	"answer_nature":"Unequivocal Answer"},
	"QApair_39": {
	"name":"simultaneous_administration",
	"question_id":"1efe3ee120d74da58163fcdcff38f45a",
	"question":"Can VEKLURY be administered simultaneously with any other medication?",
	"answer_id":"31f1e0459f1146918c73096d3a0a6145",
	"answer":"Do not administer the prepared diluted solution simultaneously with any other medication. ",
	"answer_nature":"Unequivocal Answer"},
	"QApair_40": {
	"name":"intravenous_compatibility",
	"question_id":"e63664d6adea4715a25d138da34321ff",
	"question":"Is VEKLURY injection compatible with other intravenous solutions or medications besides 0.9% sodium chloride USP? ",
	"answer_id":"9117ab9d2a6b489f9956a54863bbeb8f",
	"answer":"The compatibility of VEKLURY injection with intravenous solutions and medications other than 0.9% sodium chloride injection, USP is not known. ",
	"answer_nature":"Unequivocal Answer"},
	"QApair_41": {
	"name":"infustion_time_range",
	"question_id":"1e71414fc9ef4eb4b719b41f69139102",
	"question":"What is the general time duration over which VEKLURY should be administered by intravenous infusion?",
	"answer_id":"42de14bd912f46ddaa2c3f8967c1b677",
	"answer":"Administer VEKLURY via intravenous infusion over 30 to 120 minutes.",
	"answer_nature":"Unequivocal Answer"},
	"QApair_42": {
	"name":"infusion_rate_for_250mL_over_30_minutes",
	"question_id":"b1d57785471c4fc8949f7752181269fa",
	"question":"At what rate should an influsion bag containing VEKLURY with a volume of 250mL be infused for the infusion to have an infusion time of 30 minutes?",
	"answer_id":"7b17fc4a8ef14f39b9349543c4c6a386",
	"answer":"8.33 mL/minute",
	"answer_nature":"Unequivocal Answer"}
	
	
	
	};
	// check user input
	if (input === 0) {// 0 = send the whole remdesivir_label_object
		console.log(remdesivir_label_object);// test in Node.js
		//return remdesivir_label_object;
	} else if (input === 1) {// 1 = send all of the question IDs as a list
		for (var output in remdesivir_label_object) {
		console.log(remdesivir_label_object[output].question_id);// test in Node.js
		//return remdesivir_label_object[output].question_id);
		}
	} else if (input === 2) {// 2 = send all of the question IDs and questions
		for (var output in remdesivir_label_object) {
		console.log(remdesivir_label_object[output].question_id);// test in Node.js
		console.log(remdesivir_label_object[output].question);// test in Node.js
		//return remdesivir_label_object[output].question_id);
		//return remdesivir_label_object[output].question);
		}
	} else if (input === 3) {// 3 = send all of the answer IDs as a list
		for (var output in remdesivir_label_object) {
		console.log(remdesivir_label_object[output].answer_id);// test in Node.js
		//return remdesivir_label_object[output].answer_id;
		}
	} else if (input === 4) {// 4 = send all of the answer IDs and answers
		for (var output in remdesivir_label_object) {
		console.log(remdesivir_label_object[output].answer_id);// test in Node.js
		console.log(remdesivir_label_object[output].answer);// test in Node.js
		//return remdesivir_label_object[output].answer_id;
		//return remdesivir_label_object[output].answer;
		}
	} else {// try finding question/answer identifier = send the single object
		var found = false;
		for (var output in remdesivir_label_object) {
			if (input === remdesivir_label_object[output].question_id ||
			input === remdesivir_label_object[output].answer_id) {
				console.log(remdesivir_label_object[output]);
				//return remdesivir_label_object[output];
				found = true;
				break;
			}
		}// if not found = send error message
		if (found === false) {
		console.log("\nInput error. Please try again.\n\
		\n0 = send the whole remdesivir_label_object\
		\n1 = send all of the question IDs as a list\
		\n2 = send all of the question IDs and questions\
		\n3 = send all of the answer IDs as a list\
		\n4 = send all of the answer IDs and answers\
		\nquestion/answer identifier = send the single object");
		}
	}
}
// run test cases with different inputs
// send();
// send(0);
// send(1);
// send(2);
// send(3);
// send(5);
// send(4);
// send("string");
send("3cb881f5a0b24d93af656715245727a8");// QApair 31, answer id
