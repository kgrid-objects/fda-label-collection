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
		"name": "indication",// optional? nickname, title to sub object
		"question_id": "656d693bbe8f49b4b2f7f8527655636e",// 12 characters
		"question": "What is its indication?",
		"answer_id": "7c5573a83ba54ac5b8b412988bd8f29c",
		"answer": "VEKLURY is indicated for adults and pediatric patients (12 years of age and older and weighing at least 40 kg) for the treatment of coronavirus disease 2019 (COVID-19) requiring hospitalization.",
		},
		"QApair_2": {
		"name": "where_administered",
		"question_id": "0109d944130344c2869ebc8e9329ac91",
		"question": "Where should it be administered?",
		"answer_id": "b2d9ea3ac32e4e2591342d7998a461d3",
		"answer": "VEKLURY should only be administered in a hospital or in a healthcare setting capable of providing acute care comparable to inpatient hospital care.",
		},
		"QApair_3": {
		"name": "testing_before_initiating_and_during_treatment",
		"question_id": "c3e78446f57f4580872e8f085dc02863",
		"question": "What testing needs to be done before Initiating and during treatment?",
		"answer_id": "c4bff4466b1e480191d4738916c6d90c",
		"answer": "Determine eGFR in all patients before starting VEKLURY and monitor while receiving VEKLURY as clinically appropriate. Perform hepatic laboratory testing in all patients before starting VEKLURY and while receiving VEKLURY as clinically appropriate.Determine prothrombin time in all patients before starting VEKLURY and monitor while receiving VEKLURY as clinically appropriate."
		},
		"QApair_4": {
		"name": "testing_before_initiating_and_during_treatment",
		"question_id": "42799976d99f4b8bb900584e4c4ba39f",
		"question": "What testing needs to be done before Initiating and during treatment?",
		"answer_id": "d1f4432d4d4443e99ec222c2c12c431c",
		"answer": "Determine eGFR in all patients before starting VEKLURY and monitor while receiving VEKLURY as clinically appropriate. Perform hepatic laboratory testing in all patients before starting VEKLURY and while receiving VEKLURY as clinically appropriate.Determine prothrombin time in all patients before starting VEKLURY and monitor while receiving VEKLURY as clinically appropriate."
		},
		"QApair_5": {
		"name": "testing_before_initiating_and_during_treatment",
		"question_id": "16bf1bea6419487ea70e8fb869d4a5ef",
		"question": "What testing needs to be done before Initiating and during treatment?",
		"answer_id": "837c83bfc4fd427e86b5a92cb41c23f5",
		"answer": "Determine eGFR in all patients before starting VEKLURY and monitor while receiving VEKLURY as clinically appropriate. Perform hepatic laboratory testing in all patients before starting VEKLURY and while receiving VEKLURY as clinically appropriate.Determine prothrombin time in all patients before starting VEKLURY and monitor while receiving VEKLURY as clinically appropriate."
		},
		"QApair_6": {
		"name": "recommended_dosage",
		"question_id": "ee8f02b6e42c4c8895faa75fd29b7806",
		"question": "What is the recommended dosage?",
		"answer_id": "3c22769075b848f6a3a57ae1c5748257",
		"answer": "The recommended dosage for adults and pediatric patients 12 years of age and older and weighing at least 40 kg is a single loading dose of VEKLURY 200 mg on Day 1 via intravenous infusion followed by once-daily maintenance doses of VEKLURY 100 mg from Day 2 via intravenous infusion."
		},
		"QApair_7": {
		"name": "treatment_duration",
		"question_id": "206beaa6195c48679d2330e594b0cd6b",
		"question": "What is the recommended treatment duration?",
		"answer_id": "eb895d7168c548909e2e2bc2def46c45",
		"answer": "The recommended treatment duration for patients not requiring invasive mechanical ventilation and/or extracorporeal membrane oxygenation (ECMO) is 5 days.  If a patient does not demonstrate clinical improvement, treatment may be extended for up to 5 additional days for a total treatment duration of up to 10 days.  The recommended total treatment duration for patients requiring invasive mechanical ventilation and/or ECMO is 10 days."
		},
		"QApair_8": {
		"name": "treatment_duration",
		"question_id": "c8fd0d1278164e7b87da37540991b846",
		"question": "What is the recommended treatment duration?",
		"answer_id": "e2d6a01b8b564353b4c4f6c9c3c24c6d",
		"answer": "The recommended treatment duration for patients not requiring invasive mechanical ventilation and/or extracorporeal membrane oxygenation (ECMO) is 5 days.  If a patient does not demonstrate clinical improvement, treatment may be extended for up to 5 additional days for a total treatment duration of up to 10 days.  The recommended total treatment duration for patients requiring invasive mechanical ventilation and/or ECMO is 10 days."
		},
		"QApair_9": {
		"name": "treatment_duration",
		"question_id": "a21e528d802d41549a1c0d79e2beec0b",
		"question": "What is the recommended treatment duration?",
		"answer_id": "32a0a695df754ed7b2caf7bcc1906312",
		"answer": "The recommended treatment duration for patients not requiring invasive mechanical ventilation and/or extracorporeal membrane oxygenation (ECMO) is 5 days.  If a patient does not demonstrate clinical improvement, treatment may be extended for up to 5 additional days for a total treatment duration of up to 10 days.  The recommended total treatment duration for patients requiring invasive mechanical ventilation and/or ECMO is 10 days."
		},
		"QApair_10": {
		"name": "need_dilution",
		"question_id": "5f61e7990a4d465fa0d5aeb109c682d0",
		"question": "Does the drug product need to be diluted?",
		"answer_id": "7ff558a6ce414841bf641b6bef08ab81",
		"answer": "VEKLURY must be diluted prior to intravenous infusion."
		},
		"QApair_11": {
		"name": "renal_impairment",
		"question_id": "cad9862cefc6415dae2b47cc839279ee",
		"question": "What is recommended in cases of renal impairment?",
		"answer_id": "d30fc2e72c2e476a96984e8b270ba634",
		"answer": "VEKLURY is not recommended in patients with eGFR less than 30 mL per minute."
		},
		"QApair_12": {
		"name": "supervision",
		"question_id": "7ef52c4f2daa482696b8675fae9a434d",
		"question": "What supervision is required for use?",
		"answer_id": "50271bed90bf4732bf555abb5eb331f1",
		"answer": "VEKLURY must be prepared and administered under the supervision of a healthcare provider."
		},
		"QApair_13": {
		"name": "route_of_administration",
		"question_id": "a1ae260b2b754f44bcc50a10df9f0c16",
		"question": "What is the required route of administration?",
		"answer_id": "f0774b9d0ecd4f97944cf7f935382cb4",
		"answer": "VEKLURY must be administered via intravenous infusion only. Do not administer by any other route."
		},
		"QApair_14": {
		"name": "number_of_dosage_forms",
		"question_id": "1d737a212e4347aa965cd2874b93c4f7",
		"question": "How many dosage forms are available?",
		"answer_id": "ebd02a67b64b473aad8ce9f8eace957e",
		"answer": "VEKLURY is available in two dosage forms."
		},
		"QApair_15": {
		"name": "dosage_forms",
		"question_id": "fc353220d9954f94a14089b8411fcadb",
		"question": "What are the available dosage forms?",
		"answer_id": "e7461650519b4e6680fc44f935b1c6b6",
		"answer": "VEKLURY for injection (supplied as 100 mg lyophilized powder in vial) needs to be reconstituted with Sterile Water for Injection prior to diluting in a 100 mL or 250 mL 0.9% sodium chloride infusion bag AND VEKLURY for injection (supplied as 100 mg lyophilized powder in vial) needs to be reconstituted with Sterile Water for Injection prior to diluting in a 100 mL or 250 mL 0.9% sodium chloride infusion bag."
		},
		"QApair_16": {
		"name": "dosage_forms",
		"question_id": "16e23675e7794705b4bfeb119321c466",
		"question": "What are the available dosage forms?",
		"answer_id": "955a8518da1342feb6094739eeb33477",
		"answer": "VEKLURY for injection (supplied as 100 mg lyophilized powder in vial) needs to be reconstituted with Sterile Water for Injection prior to diluting in a 100 mL or 250 mL 0.9% sodium chloride infusion bag AND VEKLURY for injection (supplied as 100 mg lyophilized powder in vial) needs to be reconstituted with Sterile Water for Injection prior to diluting in a 100 mL or 250 mL 0.9% sodium chloride infusion bag."
		},
		"QApair_17": {
		"name": "drug_product_inspection",
		"question_id": "f2570e902ffd433abfb554c32afbfbda",
		"question": "How should parenteral drug products be inspected?",
		"answer_id": "b25e80145c434a35a1015376255e7c2b",
		"answer": "Parenteral drug products should be inspected visually for particulate matter and discoloration prior to administration."
		},
		"QApair_18": {
		"name": "when_to_discard",
		"question_id": "313babc40dfc46039269a49d187af4b7",
		"question": "When should the drug product be discarded?",
		"answer_id": "8ed2ac3a21e342ceb7840097c33ff43a",
		"answer": "Discard the vial if the lyophilized powder or solution is discolored or contains particulate matter."
		},
		"QApair_19": {
		"name": "what_products_look_like_prior_to_dilution",
		"question_id": "592501e16f7343b18e58db19d57586a9",
		"question": "What should the drug products look like prior to dilution?",
		"answer_id": "b8edd72ee7a64b6696b0f53d9b652848",
		"answer": "Prior to dilution in a 0.9% sodium chloride infusion bag, reconstituted VEKLURY for injection and VEKLURY injection solution should be a clear, colorless to yellow solution, free of visible particles."
		},
		"QApair_20": {
		"name": "general_preparation",
		"question_id": "f6f5c822717440b0b0247c434588caf2",
		"question": "How are these products generally prepared?",
		"answer_id": "d95933a3dc3245dda5aed34dbd1e282c",
		"answer": "Prepare diluted solution under aseptic conditions and on same day as administration."
    },
    "QApair_21": {
		"name": "reconstitution",
		"question_id": "c669a0a8a1544b44b834b3a7131c6f14",
		"question": "When supplied as a lyophilized powder in a vial, how should the dosage form be reconstituted?",
		"answer_id": "0bdb4ae353aa4f28b52cc7c898b29429",
		"answer": "VEKLURY for Injection (Supplied as 100 mg Lyophilized Powder in Vial) Reconstitution Instructions Remove the required number of single-dose vial(s) from storage. For each vial: Aseptically reconstitute VEKLURY lyophilized powder by adding 19 mL of Sterile Water for Injection using a suitably sized syringe and needle per vial. Only use Sterile Water for Injection to reconstitute VEKLURY lyophilized powder. Discard the vial if a vacuum does not pull the Sterile Water for Injection into the vial. Immediately shake the vial for 30 seconds. Allow the contents of the vial to settle for 2 to 3 minutes. A clear solution should result. If the contents of the vial are not completely dissolved, shake the vial again for 30 seconds and allow the contents to settle for 2 to 3 minutes. Repeat this procedure as necessary until the contents of the vial are completely dissolved. Discard the vial if the contents are not completely dissolved. Following reconstitution, each vial contains 100 mg/20 mL (5 mg/mL) of remdesivir solution. Use reconstituted product immediately to prepare the diluted drug product"
    },
    "QApair_22": {
		"name": "reconstitute_with",
		"question_id": "9caba88f2edd41bcab3618da60e673b1",
		"question": "What should be used to reconstitute the lyophilized powder?",
		"answer_id": "4fa22cd184c842d1b13d20e2bee0d67c",
		"answer": "Only use Sterile Water for Injection to reconstitute VEKLURY lyophilized powder."
    },
    "QApair_23": {
		"name": "preservatives",
		"question_id": "55dadeea4c1f421da389b51cf6184f71",
		"question": "Are there preservatives or bacteriostatic agents in the products?",
		"answer_id": "cb552d4667d94df5a29cb9b53fd16e14",
		"answer": "There is no preservative or bacteriostatic agent present in this product."
    },
    "QApair_24": {
		"name": "aseptic_technique",
		"question_id": "9dc07efbdd5342849204b822c4675020",
		"question": "Must aseptic technique be used to prepare the products?",
		"answer_id": "7acadd1a9e724ebca3dd28d097177009",
		"answer": "Aseptic technique must be used in preparation of the final parenteral solution."
    },
    "QApair_25": {
		"name": "immediate_use",
		"question_id": "f3d6ba727a2f4a24969cdb4f1c4297b4",
		"question": "Is immediate use after preparation advised?",
		"answer_id": "2db88b47b9f6412393e7444712a3a6eb",
		"answer": "It is always recommended to administer intravenous medication immediately after preparation when possible."
    },
    "QApair_26": {
		"name": "reconstituted_product_dilution",
		"question_id": "44a6079366fd4b9bb7a1390cc973fb1e",
		"question": "How should the reconstituted lyophilized product be further diluted?",
		"answer_id": "3cb881f5a0b24d93af656715245727a8",
		"answer": "Reconstituted VEKLURY for injection, containing 100 mg/20 mL remdesivir solution, must be further diluted in either a 100 mL or 250 mL 0.9% sodium chloride infusion bag."
    },
    "QApair_27": {
		"name": "recommended_diluents_for_reconstituted_product_dilution",
		"question_id": "1e79b3e613ac4c7584fdcd070872e58f",
		"question": "What are the recommended diluents for the reconstituted lyophilized product?",
		"answer_id": "c3356747413b4ea58d9b055ad73b6589",
		"answer": "Reconstituted VEKLURY for injection, containing 100 mg/20 mL remdesivir solution, must be further diluted in either a 100 mL or 250 mL 0.9% sodium chloride infusion bag."
    },
    "QApair_28": {
		"name": "loading_dose_in_250_mL",
		"question_id": "207583ef776b4c3197889ee04f613175",
		"question": "How should a loading dose of 200mg of VEKLURY in 250mL 0.9% Sodium Chloride be prepared?",
		"answer_id": "b9f44c24c84048febd9ef0426a0b037a",
		"answer": "For a Loading Dose of 200mg (2 Vials) in a 250mL 0.9% Sodium Chloride infusion bag: Withdraw and discard 40mL of 0.9% sodium chloride from the bag using an appropriately sized syringe and needle. Withdraw the 40mL volume of reconstituted VEKLURY for injection from the two VEKLURY vials using an appropriately sized syringe. Discard any unused portion remaining in the reconstituted vial. Transfer the 40mL volume of reconstituted VEKLURY for injection to the selected infusion bag. Gently invert the bag 20 times to mix the solution in the bag. Do not shake."
    },
    "QApair_29": {
		"name": "loading_dose_in_100_mL",
		"question_id": "3ee84b9af79f469da441cce0b7491d4e",
		"question": "How should a loading dose of 200mg of VEKLURY in 100mL 0.9% Sodium Chloride be prepared?",
		"answer_id": "e5c64361c28746af8e185913ef4086b8",
		"answer": "For a Loading Dose of 200mg (2 Vials) in a 100mL 0.9% Sodium Chloride infusion bag: Withdraw and discard 40mL of 0.9% sodium chloride from the bag using an appropriately sized syringe and needle. Withdraw the 40mL volume of reconstituted VEKLURY for injection from the two VEKLURY vials using an appropriately sized syringe. Discard any unused portion remaining in the reconstituted vial. Transfer the 40mL volume of reconstituted VEKLURY for injection to the selected infusion bag. Gently invert the bag 20 times to mix the solution in the bag. Do not shake."
    },
    "QApair_30": {
		"name": "maintenance_dose_in_250_mL",
		"question_id": "354656e3327b408d81975ca27106537e",
		"question": "How should a maintenance dose of 200mg of VEKLURY in 250mL 0.9% Sodium Chloride be prepared?",
		"answer_id": "bab985c271a94df7a8e23ac254593c72",
		"answer": "For a Maintenance Dose of 100mg (1 Vial) in a 250mL 0.9% Sodium Chloride infusion bag: Withdraw and discard 20mL of 0.9% sodium chloride from the bag using an appropriately sized syringe and needle. Withdraw the 20mL volume of reconstituted VEKLURY for injection from the one VEKLURY vial using an appropriately sized syringe. Discard any unused portion remaining in the reconstituted vial. Transfer the 20mL volume of reconstituted VEKLURY for injection to the selected infusion bag. Gently invert the bag 20 times to mix the solution in the bag. Do not shake."
    },
    "QApair_31": {
		"name": "maintenance_dose_in_100_mL",
		"question_id": "d0af9e9698c54eadb67fb1be72531517",
		"question": "How should a maintenance dose of 200mg of VEKLURY in 100mL 0.9% Sodium Chloride be prepared?",
		"answer_id": "d4e5280cd4ce40ba9977d47e6693c0bc",
		"answer": "For a Maintenance Dose of 100mg (1 Vial) in a 100mL 0.9% Sodium Chloride infusion bag: Withdraw and discard 20mL of 0.9% sodium chloride from the bag using an appropriately sized syringe and needle. Withdraw the 20mL volume of reconstituted VEKLURY for injection from the one VEKLURY vial using an appropriately sized syringe. Discard any unused portion remaining in the reconstituted vial. Transfer the 20mL volume of reconstituted VEKLURY for injection to the selected infusion bag. Gently invert the bag 20 times to mix the solution in the bag. Do not shake."
    },
    "QApair_32": {
		"name": "prepared_infusion_solution_stability",
		"question_id": "305f4c2e5ae940539686b409e634ec8b",
		"question": "What is the stability of the prepared infusion solution of VEKLURY?",
		"answer_id": "ce519bb9d44f475bb4c3b0b8b5399fb6",
		"answer": "The prepared infusion solution is stable for 24 hours at room temperature (20°C to 25°C [68°F to 77°F]) or 48 hours at refrigerated temperature (2°C to 8°C [36°F to 46°F])."
    },
    "QApair_33": {
		"name": "storage_temperatures",
		"question_id": "67d23a9fa988457180f1e20935889035",
		"question": "At what temperatures should the prepared infusion solution of VEKLURY be kept?",
		"answer_id": "ce519bb9d44f475bb4c3b0b8b5399fb6",
		"answer": "The prepared infusion solution is stable for 24 hours at room temperature (20°C to 25°C [68°F to 77°F]) or 48 hours at refrigerated temperature (2°C to 8°C [36°F to 46°F])."
    },




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
// send("b2d9ea3ac32e4e2591342d7998a461d");
send("b2d9ea3ac32e4e2591342d7998a461d3");// QApair 2
send("d0af9e9698c54eadb67fb1be72531517");// QApair 31
