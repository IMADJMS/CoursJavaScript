/*
String Methods
  indexof (Value [Mand], Start [Opt] 0)
- lastIndexof (Value [Mand], Start [Opt] Lengti
  slice(Start [Mand], End [Opt] Not Include Er
-repeat (Times) [ES6]
  split(Separator [Opt], Limit [Opt])
  */

  a = "imad jamoussi developmen "

// indxOf lastIndexOf ymken lik t3tihom mnin ibdaw i9albo
  /* indxOf kat3teha fl parmetre dyalha wahd valeur ou hia katgol lik fin kayn ou ila ga3ma l9ato katraj3 lik -7 ou katbda men 0   */
  console.log(a.indexOf("jamoussi")); // 5
  console.log(a.indexOf("d")); //3
  console.log(a.indexOf("d",4)); //14

  /* lastIndexOf  fhal indxOf gha hia katkbda t9eleb men lakhr */
  console.log(a.lastIndexOf("d")); //14 hit bdat men lakhr ou awl whda l9atha 3tatek position dyalha
  console.log(a.lastIndexOf("d" , 8)); // fhala katgol liha men 8 ou nti habta

  /* slice kat3tiha fl parametr dyalha Start [Mand], End [Opt] ou hia katbayen lik hadek chi ou darori tzid bwahde
  mataln fhal had lmital bghiti ssi gha zadti bwahed  */
  console.log(a.slice(10,13)); //ssi

  /* Repeat ch7al men mara baghi t3awdah */
  console.log(a.repeat(5));


  /* Split kat9sem lik ou katrj3ha lik array ou ldakhl dyal spllit kat3tiha mnin t9sem lik */
  console.log(a.split("",5));