data = [
  {
    'year': 1914,
    'content': "Born in Cresco, Iowa",
  },
  {
    'year': 1933,
    'content': "Leaves his family's farm to attend the University of Minnesota, thanks to a Depression era program known as the 'National Youth Administration'",
  },
  {
    'year': 1935,
    'content': "Has to stop school and save up more money. Works in the Civilian Conservation Corps, helping starving Americans. 'I saw how food changed them', he said. 'All of this left scars on me.'",
  },
  {
    'year': 1937,
    'content': "Finishes university and takes a job in the US Forestry Service",
  },
  {
    'year': 1938,
    'content': "Marries wife of 69 years Margret Gibson. Gets laid off due to budget cuts. Inspired by Elvin Charles Stakman, he returns to school study under Stakman, who teaches him about breeding pest-resistent plants.",
  },
  {
    'year': 1941,
    'content': "Tries to enroll in the military after the Pearl Harbor attack, but is rejected. Instead, the military asked his lab to work on waterproof glue, DDT to control malaria, disinfectants, and other applied science.",
  },
  {
    'year': 1942,
    'content': "Receives a Ph.D. in Genetics and Plant Pathology",
  },
  {
    'year': 1944,
    'content': "Rejects a 100% salary increase from Dupont, leaves behind his pregnant wife, and flies to Mexico to head a new plant pathology program. Over the next 16 years, his team breeds 6,000 different strains of disease resistent wheat - including different varieties for each major climate on Earth.",
  },
  {
    'year': 1945,
    'content': "Discovers a way to grown wheat twice each season, doubling wheat yields",
  },
  {
    'year': 1953,
    'content': "crosses a short, sturdy dwarf breed of wheat with a high-yeidling American breed, creating a strain that responds well to fertilizer. It goes on to provide 95% of Mexico's wheat.",
  },
  {
    'year': 1962,
    'content': "Visits Delhi and brings his high-yielding strains of wheat to the Indian subcontinent in time to help mitigate mass starvation due to a rapidly expanding population",
  },
  {
    'year': 1970,
    'content': "receives the Nobel Peace Prize",
  },
  {
    'year': 1983,
    'content': "helps seven African countries dramatically increase their maize and sorghum yields",
  },
  {
    'year': 1984,
    'content': "becomes a distinguished professor at Texas A&M University",
  },
  {
    'year': 2005,
    'content': "states 'we will have to double the world food supply by 2050.' Argues that genetically modified crops are the only way we can meet the demand, as we run out of arable land. Says that GM crops are not inherently dangerous because 'we've been genetically modifying plants and animals for a long time. Long before we called it science, people were selecting the best breeds.'",
  },
  {
    'year': 2009,
    'content': "dies at the age of 95.",
  }
]

const getData = () => {
  return data;
}

const assignData = () => {
  const info = document.getElementById("tribute-info-ul");
  const data = getData();
  for (var i = 0; i < data.length; i++) {
    let item = data[i];
    let li = document.createElement('li');
    let bold = document.createElement('strong');
    bold.appendChild(document.createTextNode(`${item.year}`));
    li.appendChild(bold);
    li.appendChild(document.createTextNode(` - ${item.content}`));
    info.appendChild(li);
  }
}
  
assignData();
