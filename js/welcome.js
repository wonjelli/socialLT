var welcome = {};

// --------------  things that vary from task to task --------------

welcome.task = {};
welcome.task.blurb = '<b>"The Mixer Party Game"</b> is a short psychological study investigating how people make decisions.';
welcome.task.time = '20–30 minutes';
welcome.task.pay = 'US$2.00';

// --------------  things that vary between ethics approvals --------------

welcome.ethics = {};
welcome.ethics.approval = '3333';
welcome.ethics.name = 'Learning from decision-dependent experience';
welcome.ethics.about = 'You are invited to take part in this research study. The research study aims to examine how people learn about different options to make decisions. You have been invited because you have responded to an advertisement for this study.';
welcome.ethics.who = 'The study is being carried out by the following researchers: Professor Brett Hayes and Amy Li from the School of Psychology, at UNSW Sydney.';
welcome.ethics.inclusion = 'Not applicable.';
welcome.ethics.haveTo = 'Participation in this research study is voluntary. If you do not want to take part, you do not have to. If you decide to take part and later change your mind, you are free to withdraw from the study at any stage.';
welcome.ethics.risks = 'If you decide to take part in the research study, we will ask you to complete a simple decision making task in the form of a game, which will take approximately '+ welcome.task.time +'. In this game, you will choose whether or not to select different options, over a repeated number of choices. <br>The risks associated with this study are no more than those experienced on a daily basis. We don’t expect this research to cause any harm. However, you may skip any written or verbal questions if you wish. Please let the researchers know if you need any assistance for any reason, either in person or using the contact details provided below.';
welcome.ethics.time = 'In total, participation in this study will require ' + welcome.task.time + '. This will include one single session in which you will complete the decision making task described above.';
welcome.ethics.recompense = 'You will receive ' + welcome.task.pay + ' if you are an online participant taking part via Amazon Mechanical Turk, as recompense for your participation. You may also earn a bonus of up to $1.50 to $2 USD, depending on your performance on the task.';
welcome.ethics.benefits = 'We cannot promise that you will receive any benefits from this study, but we hope to use the findings from this study to further our understanding of the factors influencing people’s decisions, and under which conditions they may learn best.';
welcome.ethics.information = 'The information that you give us will be kept for a minimum of 5 years after the project’s completion.  We will store information about you in a deidentified format at a secure location in the School of Psychology at UNSW Sydney. <br><br>' +
                            'Researchers at UNSW are requested to store their aggregated research data in the UNSW data repository, this is a system called ResData. Once the aggregated data are deposited into this repository, they will be retained in this system permanently, but in a format where your data will not be individually identifiable.<br><br>' +
                            'We hope to publish the results of this study, but this will not include information that identifies you. Information collected for this research project may be shared with other researchers in de-identified form only; for example, in order to verify that our findings are robust, or form the basis of future research.<br><br>' + 
                            'The information you provide is personal information for the purposes of the Privacy and Personal Information Protection Act 1998 (NSW).  You have the right of access to personal information held about you by the University, the right to request correction and amendment of it, and the right to make a compliant about a breach of the Information Protection Principles as contained in the PPIP Act.  Further information on how the University protects personal information is available in the <a href="https://www.legal.unsw.edu.au/compliance/privacyhome.html">UNSW Privacy Management Plan</a>.';
welcome.ethics.results = 'The research team intend to publish and/ report the results of the research study in a variety of ways. All information published will be done in a way that will not identify you. If you would like to receive a copy of the results you can let the research team know by sending them your email address via email. We will only use these details to send you the results of the research.  ';
welcome.ethics.withdraw = '<p>If you do consent to participate, you may withdraw at any time. You do not have to give any reason for withdrawing.  However, please let the researcher know electronically, through contacting either of the researchers using the emails provided below.</p>'+
                          '<p>If you do consent to participate, you may withdraw at any time. You can do this by closing the task. If you withdraw from the research, we will destroy any information has already been collected. Once you have submitted your responses however, we will not be able to delete them as the task is anonymous. </p>' +
                          '<p>Your decision not to participate or to withdraw from the study will not affect your relationship with UNSW Sydney. If you decide to withdraw from the research study, the researchers will not collect additional information from you. Any identifiable information about you will be withdrawn from the research project. </p>';
welcome.ethics.questions = 'If you require further information regarding this study or if you have any problems which may be related to your involvement in the study, you can contact the following member/s of the research team: <br><br><b>Name: </b>Professor Brett Hayes<br><b>Telephone:</b> 02 9385 3713 <br><b>Email:</b> b.hayes@unsw.edu.au<br><br><b>Name: </b>Amy Li<br><b>Telephone:</b> +61 434 986 183 <br><b>Email:</b> amy.x.li@student.unsw.edu.au';
welcome.ethics.complaints = 'If you have a complaint regarding any aspect of the study or the way it is being conducted, please contact the UNSW Human Ethics Coordinator: <br><br><b>Position: </b>UNSW Human Research Ethics Coordinator<br><b>Telephone:</b> + 61 2 9385 6222 <br><b>Email:</b> humanethics@unsw.edu.au<br><b>HC Reference Number:</b> 3333 ';

// ----------------------- function to start the task ------------------
welcome.run = function() {
    document.getElementById("welcome").innerHTML =
        welcome.section.header +
        welcome.section.start +
        welcome.section.consent +
        welcome.section.demographics;
}

// ------------- actions to take at the end of each click ----------------
welcome.click = {};
welcome.click.start = function() {
    welcome.helpers.setDisplay('start', 'none');
    welcome.helpers.setDisplay('consent', '');
    welcome.helpers.setHeader(' ');
}
welcome.click.consent = function() {
    welcome.helpers.setDisplay('consent', 'none');
    welcome.helpers.setDisplay('demographics', '');
    welcome.helpers.setHeader(' ');
}
welcome.click.demographics = function() {
    jsPsych.data.addProperties({  // record the condition assignment in the jsPsych data
        gender: document.getElementById("gender").value,
        age: document.getElementById("age").value,
        country: document.getElementById("country").value,
        email: document.getElementById("email").value,
});

if (
    (document.getElementById("gender").value !== '') &&
    (document.getElementById("age").value !== '') &&
    (document.getElementById("country").value !== '')
    ) {
        welcome.helpers.setDisplay('demographics', 'none');
        welcome.helpers.setDisplay('header', 'none');
        startExperiment(); // start the jsPsych experiment
        } else {
        alert('Please complete all compulsory fields marked *.');
        return;
        }
    }

// ------------- html for the various sections ----------------
welcome.section = {};
welcome.section.header =
    '<!-- ####################### Heading ####################### -->' +
    '<a name="top"></a>' +
    '<h1 style="text-align:center; width:1000px" id="header" class="header">' +
    '   &nbsp; Sydney Thinking and Reasoning Lab</h1>';

welcome.section.start =
    '<!-- ####################### Start page ####################### -->' +
    '<div class="start" style="width: 900px">' +
    '<div class="start" style="text-align:left; border:0px solid; padding:10px;' +
    '                          width:800px; float:right; font-size:90%">' +
    welcome.task.blurb + ' <br><br>The study involves the following steps:</p>' +
    '<ol>' +
    '<li> Because this is a University research project, we ask for informed consent. ' +
    ' <br></li>' +
    '<li> We then ask for some basic demographic information.</li>' +
    '<li> The study then explains how to do the task in detail. <br></li>' +
    '<li> Next comes the task itself.<br></li>' +
    '</ol>' +
    '<p>The total time taken should be about ' + welcome.task.time + '. Please <u>do not</u> use the "back" ' +
    '   button on your browser or close the window until you reach the end' +
    '. This is very likely to break the experiment. When you are ready to begin, click on' +
    '   the "start" button below.</p>' +
    '<!-- Next button for the splash page -->' +
    '<p align="center"> <input type="button" id="splashButton" class="start jspsych-btn" ' +
    'value="Start!" onclick="welcome.click.start()"> </p>' +
    '</div>' +
    '</div>';

welcome.section.consent =
    '	<!-- ####################### Consent ####################### -->' +
    '	<div class="consent" style="display:none; width:900px">' +
    '		<!-- Text box for the splash page -->' +
    '		<div class="consent" style="text-align:left; border:0px solid; padding:10px;  width:800px; font-size:90%; float:right">' +
    '			<p align="right">Approval No ' + welcome.ethics.approval + '</p>' +
    '			<p align="center"><b>THE UNIVERSITY OF NEW SOUTH WALES<br>' +
    '			PARTICIPANT INFORMATION STATEMENT</b><br><br>' + welcome.ethics.name + '</p>' +
    '			<p><b>1. What is the research study about?</b></p>' +
    '			<p>' + welcome.ethics.about + '</p>' +
    '			<p><b>2. Who is conducting this research?</b></p>' +
    '			<p>' + welcome.ethics.who + '</p>' +
    '			<p><b>3. Inclusion/Exclusion Criteria</b></p>' +
    '			<p>' + welcome.ethics.inclusion + '</p>' +
    '			<p><b>4. Do I have to take part in this research study?</b></p>' +
    '			<p>' + welcome.ethics.haveTo + '</p>' +
    '			<p><b>5. What does participation in this research require, and are there any risks involved?</b></p>' +
    '			<p>' + welcome.ethics.risks + '</p>' +
    '			<p><b>6. Total participation time</b></p>' +
    '			<p>' + welcome.ethics.time + '</p>' +
    '			<p><b>7. Recompense to participants</b></p>' +
    '			<p>' + welcome.ethics.recompense + '</p>' +
    '			<p><b>8. What are the possible benefits to participation?</b></p>' +
    '			<p>' + welcome.ethics.benefits + '</p>' +
    '			<p><b>9. What will happen to information about me?</b></p>' +
    '			<p>' + welcome.ethics.information + '</p>' +
    '			<p><b>10. How and when will I find out what the results of the research study are?</b></p>' +
    '			<p>' + welcome.ethics.results + '</p>' +
    '			<p><b>11. What if I want to withdraw from the research study?</b></p>' +
    '			<p>' + welcome.ethics.withdraw + '</p>' +
    '			<p><b>12. What should I do if I have further questions about my involvement in the research study?</b></p>' +    
    '			<p>' + welcome.ethics.questions + '</p>' +
    '           ' +
    '			<p><b>13. What if I have a complaint or any concerns about the research study?</b></p>' +
    '			<p>' + welcome.ethics.complaints + '</p>' +
    '           ' +
    '			<br>' +
    '			<p align="center"><b>PARTICIPANT CONSENT</b></p>' +
    '			By continuing, you are making a decision whether or not to participate.  Clicking the button below indicates that, having read the information provided on the participant information sheet, you have decided to participate, and declare the following: <br> ' +
    '			<br>' +
    '           <li>I understand I am being asked to provide consent to participate in this research study;</li>'+
    '           <li>I have read the Participant Information Sheet or someone has read it to me in a language that I understand; </li>'+
    '           <li>I understand the purposes, study tasks and risks of the research described in the study;</li>'+
    '           <li>I provide my consent for the information collected about me to be used for the purpose of this research study only.</li>'+
    '           <li>I have had an opportunity to ask questions and I am satisfied with the answers I have received;</li>'+
    '           <li>I freely agree to participate in this research study as described and understand that I am free to withdraw at any time during the study and withdrawal will not affect my relationship with any of the named organisations and/or research team members;</li>'+
    '           <li>I understand that I will be given a copy of this document to keep. [Click <a href = "https://amyxli.github.io/learningbees-demo/PISC-learningbees-approved-mturk.pdf" target="_blank"> <b>HERE</b> </a> to download a copy – this will open in a new tab];</li>'+
    '			<li>If I would like to receive a copy of the study results via email or post, I can provide my details on the next page and ask that they be used for this purpose only.</li>' +
    '			<p align="center">' +
    '           <input type="button" id="consentButton" class="consent jspsych-btn" value="I agree" onclick="welcome.click.consent()" >' +
    '			</p>' +
    '		</div><br><br></div>';

welcome.section.demographics =
'	<!-- ####################### Demographics ####################### -->' +
'	<div class="demographics" style="display:none; align:center; width: 1000px">' +
'		<div class="demographics" style="text-align:left; border:0px solid; padding:10px;  width:800px; font-size:90%; float:right">' +
'			<!-- Explanatory text -->' +
'            <p font-size:110%><b>Demographic information:</b></p>' +
'			<p>We need this information for our records, but it is kept completely separate from'  +
'                information about your Amazon ID. As long as you finish the experiment you will get ' +
'                paid no matter what you put here, so please be honest.</p><br>' +
'			<!-- Gender -->' +
'			<label for="gender"><b>*Gender: &nbsp;</b></label>  ' +
'           <select name="gender" id="gender" class="drop-menu">' +
'<option>Male</option><option>Female</option><option>Non-binary</option><option>Not listed here</option><option>Prefer not to say</option></select>' +
'		<br><br>' +
'			<!-- Age -->' +
'           <label for="age"><b>*Age: &nbsp;</b></label><input type = "number" min="18" max="100" onKeyUp="if(this.value>100){this.value=\'100\';}else if(this.value<18){this.value=\'18\';}" id="age" name="age" /><br /><br />' +
'			<!-- Country -->' +
'			<label for="country"><b>*Country you live in: &nbsp;</b></label>  ' +
'           <select name="country" id="country" class="drop-menu">' +
'<option>Afghanistan</option><option>&Aring;land Islands</option><option>Albania</option><option>Algeria</option><option>American Samoa</option><option>Andorra</option><option>Angola</option><option>Anguilla</option><option>Antarctica</option><option>Antigua and Barbuda</option><option>Argentina</option><option>Armenia</option><option>Aruba</option><option>Australia</option><option>Austria</option><option>Azerbaijan</option><option>Bahamas</option><option>Bahrain</option><option>Bangladesh</option><option>Barbados</option><option>Belarus</option><option>Belgium</option><option>Belize</option><option>Benin</option><option>Bermuda</option><option>Bhutan</option><option>Bolivia</option><option>Bosnia and Herzegovina</option><option>Botswana</option><option>Bouvet Island</option><option>Brazil</option><option>British Indian Ocean territory</option><option>Brunei Darussalam</option><option>Bulgaria</option><option>Burkina Faso</option><option>Burundi</option><option>Cambodia</option><option>Cameroon</option><option>Canada</option><option>Cape Verde</option><option>Cayman Islands</option><option>Central African Republic</option><option>Chad</option><option>Chile</option><option>China</option><option>Christmas Island</option><option>Cocos (Keeling) Islands</option><option>Colombia</option><option>Comoros</option><option>Congo</option><option>Congo, Democratic Republic</option><option>Cook Islands</option><option>Costa Rica</option><option>C&ocirc;te d&#8217;Ivoire (Ivory Coast)</option><option>Croatia (Hrvatska)</option><option>Cuba</option><option>Cyprus</option><option>Czech Republic</option><option>Denmark</option><option>Djibouti</option><option>Dominica</option><option>Dominican Republic</option><option>East Timor</option><option>Ecuador</option><option>Egypt</option><option>El Salvador</option><option>Equatorial Guinea</option><option>Eritrea</option><option>Estonia</option><option>Ethiopia</option><option>Falkland Islands</option><option>Faroe Islands</option><option>Fiji</option><option>Finland</option><option>France</option><option>French Guiana</option><option>French Polynesia</option><option>French Southern Territories</option><option>Gabon</option><option>Gambia</option><option>Georgia</option><option>Germany</option><option>Ghana</option><option>Gibraltar</option><option>Greece</option><option>Greenland</option><option>Grenada</option><option>Guadeloupe</option><option>Guam</option><option>Guatemala</option><option>Guinea</option><option>Guinea-Bissau</option><option>Guyana</option><option>Haiti</option><option>Heard and McDonald Islands</option><option>Honduras</option><option>Hong Kong</option><option>Hungary</option><option>Iceland</option><option>India</option><option>Indonesia</option><option>Iran</option><option>Iraq</option><option>Ireland</option><option>Israel</option><option>Italy</option><option>Jamaica</option><option>Japan</option><option>Jordan</option><option>Kazakhstan</option><option>Kenya</option><option>Kiribati</option><option>Korea (north)</option><option>Korea (south)</option><option>Kuwait</option><option>Kyrgyzstan</option><option>Lao People&#8217;s Democratic Republic</option><option>Latvia</option><option>Lebanon</option><option>Lesotho</option><option>Liberia</option><option>Libyan Arab Jamahiriya</option><option>Liechtenstein</option><option>Lithuania</option><option>Luxembourg</option><option>Macao</option><option>Macedonia, North</option><option>Madagascar</option><option>Malawi</option><option>Malaysia</option><option>Maldives</option><option>Mali</option><option>Malta</option><option>Marshall Islands</option><option>Martinique</option><option>Mauritania</option><option>Mauritius</option><option>Mayotte</option><option>Mexico</option><option>Micronesia</option><option>Moldova</option><option>Monaco</option><option>Mongolia</option><option>Montenegro</option><option>Montserrat</option><option>Morocco</option><option>Mozambique</option><option>Myanmar</option><option>Namibia</option><option>Nauru</option><option>Nepal</option><option>Netherlands</option><option>Netherlands Antilles</option><option>New Caledonia</option><option>New Zealand</option><option>Nicaragua</option><option>Niger</option><option>Nigeria</option><option>Niue</option><option>Norfolk Island</option><option>Northern Mariana Islands</option><option>Norway</option><option>Oman</option><option>Pakistan</option><option>Palau</option><option>Palestinian Territories</option><option>Panama</option><option>Papua New Guinea</option><option>Paraguay</option><option>Peru</option><option>Philippines</option><option>Pitcairn</option><option>Poland</option><option>Portugal</option><option>Puerto Rico</option><option>Qatar</option><option>R&eacute;union</option><option>Romania</option><option>Russian Federation</option><option>Rwanda</option><option>Saint Helena</option><option>Saint Kitts and Nevis</option><option>Saint Lucia</option><option>Saint Pierre and Miquelon</option><option>Saint Vincent and the Grenadines</option><option>Samoa</option><option>San Marino</option><option>Sao Tome and Principe</option><option>Saudi Arabia</option><option>Senegal</option><option>Serbia</option><option>Seychelles</option><option>Sierra Leone</option><option>Singapore</option><option>Slovakia</option><option>Slovenia</option><option>Solomon Islands</option><option>Somalia</option><option>South Africa</option><option>South Georgia and the South Sandwich Islands</option><option>Spain</option><option>Sri Lanka</option><option>Sudan</option><option>Suriname</option><option>Svalbard and Jan Mayen Islands</option><option>Swaziland</option><option>Sweden</option><option>Switzerland</option><option>Syria</option><option>Taiwan</option><option>Tajikistan</option><option>Tanzania</option><option>Thailand</option><option>Togo</option><option>Tokelau</option><option>Tonga</option><option>Trinidad and Tobago</option><option>Tunisia</option><option>Turkey</option><option>Turkmenistan</option><option>Turks and Caicos Islands</option><option>Tuvalu</option><option>Uganda</option><option>Ukraine</option><option>United Arab Emirates</option><option>United Kingdom</option><option selected="selected">United States of America</option><option>Uruguay</option><option>Uzbekistan</option><option>Vanuatu</option><option>Vatican City</option><option>Venezuela</option><option>Vietnam</option><option>Virgin Islands (British)</option><option>Virgin Islands (US)</option><option>Wallis and Futuna Islands</option><option>Western Sahara</option><option>Yemen</option><option>Zaire</option><option>Zambia</option><option>Zimbabwe</option></select>' +
'		<br><br>' +
'           <!-- Email -->' +
'           <label for="email"><b>Email (OPTIONAL – this is only if you would like to be contacted about results of the study): &nbsp;</b></label><input id="email" name="email" /><br /><br />' +
'		<!-- Demographics  button -->' +
'        <p align="center">' +
'                <input type="button" class="demographics jspsych-btn"' +
'                        id="demographicsButton" value="Next >"' +
'                       onclick="welcome.click.demographics()">' +
'       </p></div>';


// ----------------------- helper functions ------------------

welcome.helpers = {};
welcome.helpers.getRadioButton = function(name) { // get the value of a radio button
    var i, radios = document.getElementsByName(name);
    for (i = 0; i < radios.length; i = i + 1) {
        if (radios[i].checked) {
            return (radios[i].value);
        }
    }
    return ("NA");
}
welcome.helpers.setDisplay = function(theClass, theValue) { // toggle display status
    var i, classElements = document.getElementsByClassName(theClass);
    for (i = 0; i < classElements.length; i = i + 1) {
        classElements[i].style.display = theValue;
    }
}
welcome.helpers.setVisibility = function(theClass, theValue) { // toggle visibility
    var i, classElements = document.getElementsByClassName(theClass);
    for (i = 0; i < classElements.length; i = i + 1) {
        classElements[i].style.visibility = theValue;
    }
}
welcome.helpers.setHeader = function(theValue) { // alter the header
    document.getElementById("header").innerText = theValue;
}
