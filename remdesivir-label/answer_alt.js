// run this code using Node.js

// Returns a list of questions that can be answered. Later --> develop optional parameter: query
function answer() {
	// temp json data
	var remdesivir_label_object = {
		question_number_1: {
			"question_id": {
				0001 : {// 12 characters
					"name": "indication"// optional? nickname, title to sub object
				}
			},
			"question": {
				"What is its indication?" : {
					"answer": "VEKLURY is indicated for adults and pediatric patients (12 years of age and older and weighing at least 40 kg) for the treatment of coronavirus disease 2019 (COVID-19) requiring hospitalization.",	
					"answer_id": 0001,
					"answer_number": 1
				}
			}
		},
		question_number_2: {
			"question_id": {
				0002 : {
					"name": "where_administered"
				}
			},
			"question": {
				"Where should it be administered?" : {
					"answer": "VEKLURY should only be administered in a hospital or in a healthcare setting capable of providing acute care comparable to inpatient hospital care.",
					"answer_id": 0002,
					"answer_number": 2
				}
			}
		},
		question_number_3: {
			"question_id": {
				0003 : {
					"name": "testing_before_initiatiing_and_during_treatment"
				}
			},
			"question": {
				"What testing needs to be done before Initiating and during treatment?" : {
					"answer": "Determine eGFR in all patients before starting VEKLURY and monitor while receiving VEKLURY as clinically appropriate. Perform hepatic laboratory testing in all patients before starting VEKLURY and while receiving VEKLURY as clinically appropriate.Determine prothrombin time in all patients before starting VEKLURY and monitor while receiving VEKLURY as clinically appropriate.",
					"answer_id": 0003,
					"answer_number": 3
				}
			}
		}
	};
	// add later, return one answer id and one answer based on query... query code to loop data.questions and return closest match or message not found

	// return entire list of question ids and questions
	//return remdesivir_label_object;
	
	// test in Node.js
	console.log(remdesivir_label_object);
}
answer();