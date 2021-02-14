/* run this code using Node.js
 
Summary: The send function sends back certain information based on the input number.
For example, the user can input one of the following:

0 = send the whole remdesivir_label_object
1 = send all of the question IDs as a list
2 = send all of the question IDs and questions
3 = send all of the answer IDs as a list
4 = send all of the answer IDs and answers
*/
function send(input) {
	// temp json data
	var remdesivir_label_object = {
		QApair_number_1: {
		"name": "indication",// optional? nickname, title to sub object
		"question_id": 0001,// 12 characters
		"question": "What is its indication?",
		"answer_id": 0001,
		"answer": "VEKLURY is indicated for adults and pediatric patients (12 years of age and older and weighing at least 40 kg) for the treatment of coronavirus disease 2019 (COVID-19) requiring hospitalization.",	
		},
		QApair_number_2: {
		"name": "where_administered",
		"question_id": 0002,
		"question": "Where should it be administered?",
		"answer_id": 0002,
		"answer": "VEKLURY should only be administered in a hospital or in a healthcare setting capable of providing acute care comparable to inpatient hospital care.",
		},
		QApair_number_3: {
		"name": "testing_before_initiatiing_and_during_treatment",
		"question_id": 0003,
		"question": "What testing needs to be done before Initiating and during treatment?",
		"answer_id": 0003,
		"answer": "Determine eGFR in all patients before starting VEKLURY and monitor while receiving VEKLURY as clinically appropriate. Perform hepatic laboratory testing in all patients before starting VEKLURY and while receiving VEKLURY as clinically appropriate.Determine prothrombin time in all patients before starting VEKLURY and monitor while receiving VEKLURY as clinically appropriate."
		}
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
	} else {// Anything else = send error message
		console.log("\nInput error. Please try again.\n\
		\n0 = send the whole remdesivir_label_object\
		\n1 = send all of the question IDs as a list\
		\n2 = send all of the question IDs and questions\
		\n3 = send all of the answer IDs as a list\
		\n4 = send all of the answer IDs and answers");
	}
}
// test cases, different inputs
//send();
//send(0);
//send(1);
//send(2);
//send(3);
send(4);