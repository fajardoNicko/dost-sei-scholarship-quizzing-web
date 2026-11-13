/* Question bank, Part II (items 36–70): Science. Format: see questions-1.js. */
window.BANK = (window.BANK || '') + String.raw`

@36 C bio
ref §5B · Moving things across membranes
Q Red blood cells are placed in distilled water. What happens to them?
A They shrivel (crenate).
B They stay the same.
C They swell and may burst.
D They lose their nuclei.
!A Shriveling happens in a <b>hypertonic</b> solution (like salty water), where water leaves the cell. Distilled water is the opposite.
!B Nothing changes only in an <b>isotonic</b> solution (like 0.9% saline). Distilled water has no solutes at all, so water moves in.
!D Mature human red blood cells don't even <b>have</b> nuclei, and osmosis moves water, not organelles.
= Distilled water has <b>no solutes</b>, while the cell's inside has many. The water outside is <b>hypotonic</b> to the cell.
= Osmosis: water crosses the membrane toward the side with <b>more solute</b>, here into the cell.
= Animal cells have no cell wall to stop them, so they swell and can <b>burst</b> (hemolysis).
* Hypotonic → swell or burst. Isotonic → no change. Hypertonic → shrivel. (Plant cells don't burst; the cell wall makes them firm, or turgid.)
cap Water rushes in toward the higher solute concentration, so the cell swells until it bursts.

@37 B bio
ref §5F · Genetics
Q In pea plants, tall (T) is dominant over short (t). Two heterozygous tall plants are crossed. What fraction of the offspring is expected to be short?
A 0
B $\frac14$
C $\frac12$
D $\frac34$
!A Short plants can appear: each parent carries a hidden <i>t</i>, and a child who gets <i>t</i> from both parents is short.
!C $\frac12$ is the fraction of <b>heterozygous</b> (Tt) offspring, and those are tall, not short.
!D $\frac34$ is the fraction of <b>tall</b> offspring (TT + Tt), the opposite of what was asked.
= Heterozygous tall means <b>Tt</b>, so the cross is $Tt \times Tt$.
= Punnett square: TT, Tt, Tt, tt, a 1 : 2 : 1 ratio.
= Short needs two recessive alleles, <b>tt</b>: 1 box out of 4, so $\frac14$.
* Tt × Tt gives a 3 : 1 ratio of traits: ¾ dominant, ¼ recessive.
fig punnett T|t ;; T|t ;; TT|Tt|Tt|<b>tt</b> ;; 4
cap Only one box of the four is tt (short).

@38 D bio
ref §5F · Genetics (X-linked traits)
Q Red–green color blindness is X-linked recessive. A color-blind man marries a woman who is homozygous for normal vision. What is expected of their children?
A All of the sons will be color-blind.
B Half of the daughters will be color-blind.
C All of the children will be color-blind.
D All daughters will be carriers with normal vision; all sons will have normal vision.
!A Sons get their <b>Y</b> from Dad and their <b>X</b> from Mom. Both of Mom's X chromosomes are normal, so the sons see normally.
!B A daughter would need the color-blind allele from <b>both</b> parents. Mom has none to give, so no daughter is color-blind.
!C No daughter gets two copies, and no son gets Dad's X, so none of the children are color-blind.
= Genotypes: father $X^cY$ (color-blind), mother $XX$ (normal, homozygous).
= <b>Daughters</b> get Dad's $X^c$ and Mom's $X$: $X^cX$, normal vision but <b>carriers</b>.
= <b>Sons</b> get Dad's $Y$ and Mom's $X$: $XY$, normal vision.
* X-linked traits pass from a father to his <b>daughters</b>, never to his sons. Sons get their X from Mom.
fig punnett $X^c$|$Y$ ;; $X$|$X$ ;; $X^cX$<br><small>carrier ♀</small>|$XY$<br><small>normal ♂</small>|$X^cX$<br><small>carrier ♀</small>|$XY$<br><small>normal ♂</small> ;; 1,3
cap Dad's gametes on top, Mom's on the side. His $X^c$ goes only to daughters; sons get his Y.

@39 A bio
ref §5G · DNA, RNA, and proteins
Q A DNA template strand reads 3′–TACGGATTC–5′. Which mRNA (written 5′ to 3′) is transcribed from it?
A AUGCCUAAG
B ATGCCTAAG
C UACGGAUUC
D AUGGCUAAG
!B This contains <b>T</b> (thymine), which is only in DNA. RNA uses <b>U</b> (uracil) instead. This is the DNA coding strand, not mRNA.
!C This copies the template's letters (swapping T for U) instead of <b>pairing</b> them. mRNA is complementary to the template.
!D Close, but the 4th base is wrong: the template's G G pairs with <b>C C</b>, not G C.
= mRNA is built <b>complementary</b> to the template: A→U, T→A, C→G, G→C.
= Pair each base: T→A, A→U, C→G, G→C, G→C, A→U, T→A, T→A, C→G.
= Template 3′–TAC GGA TTC–5′ gives mRNA 5′–<b>AUG CCU AAG</b>–3′. (AUG is the start codon.)
* RNA has U where DNA has T. Pair the bases; don't copy them.
cap Each template base pairs with its partner: T with A, and A with U.

@40 A bio
ref §5E · Cell division
Q A human cell with 46 chromosomes undergoes meiosis. The result is
A four cells, each with 23 chromosomes.
B two cells, each with 46 chromosomes.
C four cells, each with 46 chromosomes.
D two cells, each with 23 chromosomes.
!B That's <b>mitosis</b>: one division making two identical body cells with the full 46.
!C Meiosis does make four cells, but it <b>halves</b> the chromosome number.
!D That's only the halfway point, after meiosis I. Meiosis has <b>two</b> divisions, so it ends with four cells.
= Meiosis makes sex cells (eggs and sperm) through <b>two divisions</b>: meiosis I and meiosis II.
= Meiosis I separates the homologous pairs: 46 → two cells with 23 chromosomes each (each still doubled).
= Meiosis II separates the sister chromatids: two cells → <b>four</b> cells with <b>23</b> each (haploid).
= Why halve? Egg (23) + sperm (23) = 46 in the zygote.
* Mitosis: 2 identical cells, 46 → 46. Meiosis: 4 different cells, 46 → 23.
cap Two divisions: 1 cell (46) → 2 cells (23, doubled) → 4 cells (23 each).

@41 C bio
ref §5K · Ecology
Q In the food chain grass → grasshopper → frog → snake, the grass stores 10,000 kJ of energy. Using the 10% rule, about how much reaches the snake?
A 1,000 kJ
B 100 kJ
C 10 kJ
D 1 kJ
!A 1,000 kJ reaches the <b>grasshopper</b>, the first consumer. The snake is two more steps up.
!B 100 kJ reaches the <b>frog</b>. One more 10% step is needed to reach the snake.
!D 1 kJ is one step too many: it would reach whatever eats the snake.
= Only about 10% of the energy passes to the next level; the rest is used for living or lost as heat.
= Grass 10,000 → grasshopper 1,000 → frog 100 → snake <b>10 kJ</b>.
= $$10{,}000 \times (0.1)^3 = 10\ \text{kJ}$$
* Count the arrows (3 here) and multiply by 0.1 once per arrow.
cap Each step up keeps only a tenth of the energy (bars not to scale).

@42 C bio
ref §5K · Ecology
Q <i>Rhizobium</i> bacteria live in the root nodules of legumes. They fix nitrogen for the plant and receive sugars in return. This relationship is
A parasitism.
B commensalism.
C mutualism.
D predation.
!A In parasitism one partner is <b>harmed</b>. Here the plant gains nitrogen, so nobody is harmed.
!B In commensalism one benefits and the other is <b>unaffected</b>. Here both clearly gain something.
!D Predation means one organism <b>eats</b> another. These two cooperate.
= List what each partner gets: the plant gets <b>nitrogen</b> (+); the bacteria get <b>sugars and a home</b> (+).
= Both benefit (+/+): <b>mutualism</b>.
* Score each partner +, 0, or −. Mutualism +/+, commensalism +/0, parasitism +/−, predation +/− (the prey is eaten).
fig table Relationship|Partner 1|Partner 2|Example ;; >Mutualism|+|+|<i>Rhizobium</i> and legumes ;; Commensalism|+|0|barnacles on a whale ;; Parasitism|+|−|tapeworm in a host ;; Predation|+|− (eaten)|frog eats grasshopper
cap Both partners gain: + / +.

@43 B bio
ref §5H · Evolution and classification
Q A bat's wing, a whale's flipper, and a human arm have the same arrangement of bones but different functions. They are examples of
A analogous structures.
B homologous structures.
C vestigial structures.
D mutations.
!A Analogous structures are the reverse: <b>same function, different structure</b> (a bird's wing and a butterfly's wing).
!C Vestigial structures have lost most of their use (the human appendix, a whale's hip bones). Wings, flippers, and arms are fully used.
!D A mutation is a change in DNA, not a kind of body structure.
= The same bones in the same arrangement point to a <b>common ancestor</b>.
= The different uses (flying, swimming, grasping) came from adapting that shared plan.
= Same structure + different function = <b>homologous</b>.
* Homologous = same origin (structure). Analogous = same job (function).
cap One bone plan (upper arm, forearm, wrist, fingers), reshaped for flying, swimming, and grasping.

@44 B chem
ref §6B · Atoms
Q How many neutrons are in an atom of $^{56}_{26}\text{Fe}$?
A 26
B 30
C 56
D 82
!A 26 is the <b>atomic number</b>: the number of protons (and electrons in a neutral atom), not neutrons.
!C 56 is the <b>mass number</b>: protons and neutrons together.
!D 82 adds the two numbers ($56 + 26$). Neutrons are the difference, not the sum.
= Top number = <b>mass number</b> $A$ = protons + neutrons = 56.
= Bottom number = <b>atomic number</b> $Z$ = protons = 26.
= $$N = A - Z = 56 - 26 = 30\ \text{neutrons}$$
* Neutrons = mass number − atomic number.
cap 26 protons (red) + 30 neutrons (gray) = 56 particles in the nucleus.

@45 C chem
ref §6C · The periodic table
Q Which element has the highest electronegativity?
A Na
B Cl
C F
D I
!A Sodium is a metal on the far <b>left</b>. It tends to <b>lose</b> electrons, so its electronegativity is very low (0.93).
!B Chlorine is high (3.16), but it sits <b>below</b> fluorine in group 17, and electronegativity drops going down a group.
!D Iodine is in group 17 too, but much farther down (2.66): its bigger atoms hold bonding electrons more weakly.
= Electronegativity is how strongly an atom pulls on the shared electrons in a bond.
= It <b>increases</b> to the right across a period (more protons, same shell) and <b>decreases</b> down a group (bigger atoms).
= The top-right corner (leaving out the noble gases) wins: <b>fluorine</b>, the most electronegative element (3.98).
* Electronegativity and ionization energy rise up and to the right. Atomic radius grows down and to the left.
cap Darker cells pull harder on electrons. The values rise toward the top right and peak at fluorine.

@46 D chem
ref §6D · Bonding and shapes
Q What is the molecular shape of ammonia, NH<sub>3</sub>?
A trigonal planar
B tetrahedral
C bent
D trigonal pyramidal
!A Trigonal planar needs 3 bonds and <b>no</b> lone pairs (like BF₃). The N in NH₃ also has a lone pair, which pushes the H atoms down.
!B Tetrahedral describes the 4 <b>electron groups</b> around N, but a molecular shape names only the atoms. With one corner taken by a lone pair, it's a pyramid. (CH₄ is truly tetrahedral.)
!C Bent needs 2 bonds and 2 lone pairs, like H₂O. NH₃ has 3 bonds.
= Count the electron groups on N: 3 bonding pairs (to H) + 1 lone pair = 4 groups.
= Four groups spread out in a tetrahedral arrangement (bond angles about 107° here).
= The shape is named by the <b>atoms</b> only: N on top, three H below, so it's <b>trigonal pyramidal</b>.
* VSEPR: 4 bonds → tetrahedral; 3 bonds + 1 lone pair → trigonal pyramidal; 2 bonds + 2 lone pairs → bent.
cap The lone pair (top) takes up a corner and pushes the three H atoms into a pyramid.

@47 B chem
ref §6E · Names and formulas
Q Aluminum ions (Al<sup>3+</sup>) combine with sulfate ions (SO<sub>4</sub><sup>2−</sup>). The formula of the compound is
A AlSO<sub>4</sub>
B Al<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub>
C Al<sub>3</sub>(SO<sub>4</sub>)<sub>2</sub>
D Al(SO<sub>4</sub>)<sub>3</sub>
!A AlSO₄ has $+3$ and $-2$: a total of $+1$, so it isn't neutral.
!C Al₃(SO₄)₂ gives $3(+3) + 2(-2) = +5$. The subscripts are swapped the wrong way.
!D Al(SO₄)₃ gives $+3 + 3(-2) = -3$. Still not neutral.
= An ionic compound must be <b>neutral</b>: total positive charge = total negative charge.
= Criss-cross the charge numbers: aluminum's 3 becomes sulfate's subscript, and sulfate's 2 becomes aluminum's.
= $$\text{Al}_2(\text{SO}_4)_3:\quad 2(+3) + 3(-2) = +6 - 6 = 0$$
= Keep the parentheses around SO₄: the 3 multiplies the whole polyatomic ion.
* Criss-cross the charges, check that the total is zero, and reduce if you can.
cap Criss-cross the charges: Al³⁺ and SO₄²⁻ become Al₂(SO₄)₃.

@48 A chem
ref §6F · Moles and stoichiometry
Q What is the mass of 0.50 mol of CO<sub>2</sub>? (C = 12, O = 16)
A 22 g
B 11 g
C 44 g
D 88 g
!B 11 g would be only 0.25 mol of CO₂. Multiply the moles by the full molar mass: $0.50 \times 44 = 22$.
!C 44 g is the mass of <b>one whole mole</b> (the molar mass). You have only half a mole.
!D 88 g is 2 moles: it multiplies by 2 instead of by 0.50.
= Molar mass of CO₂: $12 + 2(16) = 44\ \text{g/mol}$. (Count both O atoms.)
= $$m = n \times M = 0.50\ \text{mol} \times 44\ \tfrac{\text{g}}{\text{mol}} = 22\ \text{g}$$
* Mass = moles × molar mass. Count every atom in the formula (CO₂ has 2 O).
fig flow 0.50 mol CO₂|× 44 g/mol|^22 g
cap Moles × molar mass = grams.

@49 A chem
ref §6H · Gas laws
Q A balloon holds 2.0 L of gas at 27°C. At constant pressure, what is its volume at 127°C?
A 2.7 L
B 9.4 L
C 1.5 L
D 2.0 L
!B 9.4 L comes from using °C directly: $2.0 \times \frac{127}{27}$. Gas laws need <b>kelvins</b>, because 0°C isn't zero volume.
!C 1.5 L means the balloon <b>shrank</b> (the ratio is flipped: $2.0 \times \frac{300}{400}$). Heating a gas at constant pressure makes it expand.
!D The volume doesn't stay the same: at constant pressure, volume rises with temperature (Charles's law).
= Charles's law (constant pressure): $\dfrac{V_1}{T_1} = \dfrac{V_2}{T_2}$, with $T$ in <b>kelvins</b>.
= Convert: $T_1 = 27 + 273 = 300\ \text{K}$ and $T_2 = 127 + 273 = 400\ \text{K}$.
= $$V_2 = V_1 \cdot \frac{T_2}{T_1} = 2.0 \times \frac{400}{300} \approx 2.7\ \text{L}$$
* Always convert °C to K in gas laws (K = °C + 273).
cap In kelvins, volume is proportional to temperature: the line runs back to 0 K.

@50 C chem
ref §6I · Solutions, acids, and bases
Q Solution X has pH 3 and solution Y has pH 5. Which statement is true?
A Y is more acidic than X.
B X has twice the hydrogen-ion concentration of Y.
C X has 100 times the hydrogen-ion concentration of Y.
D Both solutions are basic.
!A A <b>lower</b> pH is more acidic, so X (pH 3) is more acidic than Y (pH 5).
!B pH is a <b>logarithmic</b> scale: each unit is a factor of 10. Two units apart means $10^2$, not 2.
!D Both pH values are below 7, so both are <b>acidic</b>. Basic solutions have a pH above 7.
= $\text{pH} = -\log[\text{H}^+]$, so $[\text{H}^+] = 10^{-\text{pH}}$.
= X: $[\text{H}^+] = 10^{-3}$ M. Y: $[\text{H}^+] = 10^{-5}$ M.
= $$\frac{10^{-3}}{10^{-5}} = 10^{2} = 100$$
* Each pH unit is a ×10 change in [H⁺]. Lower pH = more acidic.
cap Each step down the pH scale multiplies the H⁺ concentration by 10.

@51 D chem
ref §6G · Reactions (single replacement)
Q Using the activity series K > Na > Mg > Zn > Fe > (H) > Cu > Ag, which reaction will NOT occur?
A Zn + CuSO<sub>4</sub> → ZnSO<sub>4</sub> + Cu
B Mg + 2HCl → MgCl<sub>2</sub> + H<sub>2</sub>
C Fe + 2AgNO<sub>3</sub> → Fe(NO<sub>3</sub>)<sub>2</sub> + 2Ag
D Cu + ZnSO<sub>4</sub> → CuSO<sub>4</sub> + Zn
!A Zinc is <b>above</b> copper in the series, so zinc can push copper out of its compound. This reaction happens.
!B Magnesium is above <b>(H)</b>, so it replaces hydrogen in acids, fizzing out H₂ gas. This happens.
!C Iron is above silver, so iron replaces silver. This happens (silver crystals form).
= In single replacement, a free metal replaces the metal in a compound only if it is <b>higher</b> (more active) in the series.
= D asks copper to replace zinc. Copper is <b>below</b> zinc, so it's less active.
= No reaction: copper metal in zinc sulfate solution just sits there.
* Higher replaces lower. Metals above (H) react with acids to release hydrogen.
cap A metal can replace only a metal below it. Copper sits below zinc, so D fails.

@52 B earth
ref §7A · Inside the Earth
Q S waves are not detected on the side of Earth opposite an earthquake. This "shadow zone" shows that
A the inner core is liquid.
B the outer core is liquid.
C the crust is thickest under the oceans.
D the mantle is made mostly of iron.
!A The inner core is <b>solid</b> (enormous pressure keeps it solid). And the S waves are stopped before they get there, at the outer core.
!C Crust thickness has nothing to do with it. In fact, oceanic crust is <b>thinner</b> than continental crust.
!D The mantle is mostly silicate rock; iron is concentrated in the core. The S-wave shadow reveals a liquid layer, not composition.
= <b>S waves</b> (shear waves) travel only through <b>solids</b>; a liquid can't be sheared.
= Rays aimed at the far side of Earth must cross the outer core, and none of them come out.
= So that layer must be <b>liquid</b>: the outer core. (P waves pass through but bend, making their own smaller shadow zone.)
* S waves: solids only. P waves: solids and liquids. The S-wave shadow proves the outer core is liquid.
cap S waves stop at the liquid outer core, leaving a wide shadow on the far side of Earth.

@53 D earth
ref §7B · Plate tectonics
Q The Philippine Trench, east of Mindanao and the Visayas, formed where
A two continental plates collide.
B two plates pull apart.
C two plates slide past each other horizontally.
D an oceanic plate sinks beneath another plate.
!A Colliding continental plates crumple up into tall mountains (like the Himalayas). Neither sinks easily, so no deep trench forms.
!B Plates pulling apart make <b>rifts</b> and <b>mid-ocean ridges</b>, where new crust rises, not deep trenches.
!C Sliding past each other is a <b>transform</b> boundary (like the Philippine Fault on land). It causes earthquakes but no trench.
= Deep ocean trenches form at <b>convergent</b> boundaries, where a denser <b>oceanic</b> plate dives under another plate: <b>subduction</b>.
= At the Philippine Trench, the <b>Philippine Sea Plate</b> subducts westward beneath the Philippine Mobile Belt.
= The sinking plate also feeds volcanoes and strong earthquakes along the eastern Philippines.
* Trench = subduction. Ridge or rift = divergent. Sideways sliding = transform.
cap The dense oceanic plate bends down and sinks, carving a deep trench at the boundary.

@54 A earth
ref §7C · Earthquakes
Q Which statement about earthquakes is correct?
A Magnitude measures the energy released; intensity describes the effects at a particular place.
B Intensity is the same everywhere the earthquake is felt.
C Magnitude is reported using the PHIVOLCS Earthquake Intensity Scale.
D The epicenter is the point deep underground where the rupture begins.
!B Intensity <b>varies</b> by place: strongest near the epicenter and weaker farther away (it also depends on the ground and the buildings).
!C The PHIVOLCS Earthquake Intensity Scale (PEIS, I–X) measures <b>intensity</b>. Magnitude is a separate number (like moment magnitude, Mw).
!D That underground point is the <b>focus</b> (hypocenter). The epicenter is the spot on the <b>surface</b> directly above it.
= <b>Magnitude</b>: one number per earthquake, for the energy released at the source.
= <b>Intensity</b>: how strongly the shaking is felt, and the damage, at a given place. It changes from place to place.
= <b>Focus</b> = the underground starting point. <b>Epicenter</b> = the surface point right above it.
* One earthquake has one magnitude but many intensities.
cap One magnitude at the source; the intensity fades with distance from the epicenter.

@55 C earth
ref §7E · Minerals and rocks
Q Marble forms when limestone is changed by heat and pressure. Marble is therefore
A an igneous rock.
B a sedimentary rock.
C a metamorphic rock.
D a mineral, not a rock.
!A Igneous rocks form when <b>magma or lava cools</b> (granite, basalt). Marble never melted.
!B <b>Limestone</b>, the parent rock, is sedimentary. Once heat and pressure change it, it becomes a different type of rock.
!D Marble is a rock made of the mineral calcite. A rock made of one mineral is still a rock.
= Rocks changed by heat and pressure <b>without melting</b> are <b>metamorphic</b> (meta = change, morph = form).
= Limestone (sedimentary) → heat + pressure → <b>marble</b> (metamorphic).
= Other pairs: shale → slate, sandstone → quartzite, granite → gneiss.
* Igneous = cooled melt. Sedimentary = pressed layers. Metamorphic = changed by heat and pressure.
fig flow limestone<br><small>sedimentary</small>|heat + pressure|^marble<br><small>metamorphic</small> ;; shale|heat + pressure|slate ;; sandstone|heat + pressure|quartzite
cap Heat and pressure change a rock without melting it.

@56 A earth
ref §7F · Atmosphere, weather, and climate
Q In which layer of the atmosphere does almost all weather occur?
A troposphere
B stratosphere
C mesosphere
D thermosphere
!B The stratosphere sits above the weather. It holds the <b>ozone layer</b>, and jets cruise in its calm lower part.
!C The mesosphere is where <b>meteors burn up</b>. It's far too thin and dry for clouds and rain.
!D The thermosphere holds the <b>aurora</b> and the International Space Station. The air there is extremely thin.
= The <b>troposphere</b> is the lowest layer, about 0–12 km up.
= It holds about three-quarters of the atmosphere's mass and nearly all its <b>water vapor</b>.
= Clouds, rain, storms, and typhoons all form there. (Tropo = turning, mixing.)
* From the ground up: troposphere (weather) → stratosphere (ozone) → mesosphere (meteors) → thermosphere (aurora, ISS).
cap Nearly all the air and water vapor are in the lowest layer, so that's where weather happens (not to scale).

@57 C earth
ref §7F · Atmosphere, weather, and climate
Q On a sunny afternoon at the beach, the wind usually blows
A from land to sea, because the sea is warmer.
B parallel to the shore.
C from sea to land, because the land heats up faster and the air above it rises.
D from land to sea, because land is denser than water.
!A On a sunny afternoon the <b>land</b> is warmer, not the sea. (A land-to-sea breeze happens at <b>night</b>, when the land cools faster.)
!B Sea and land breezes blow <b>across</b> the shoreline, from the high-pressure side to the low-pressure side.
!D Wind is driven by <b>temperature and pressure</b> differences in the air, not by how dense the ground is.
= Land heats up faster than water, because water has a high specific heat.
= Air over the warm land expands and <b>rises</b>, leaving lower pressure near the ground.
= Cooler, denser air over the sea flows in to replace it: a <b>sea breeze</b>, from sea to land.
* Day: sea breeze (sea → land). Night: land breeze (land → sea). Air flows from cool, high pressure to warm, low pressure.
cap Warm air rises over the land, and cool sea air slides in underneath.

@58 D earth
ref §7F · Atmosphere, weather, and climate
Q In the Philippines, <i>Habagat</i> refers to
A the northeast monsoon, which brings cool, dry air.
B El Niño.
C a tropical cyclone with winds above 185 km/h.
D the southwest monsoon, which brings heavy rains.
!A That's <b>Amihan</b>, the northeast monsoon (about November to February), which brings cool, mostly dry air.
!B El Niño is a warming of the eastern Pacific that tends to bring <b>drought</b> to the Philippines. It isn't a seasonal wind.
!C A tropical cyclone with winds above 185 km/h is a <b>super typhoon</b> on PAGASA's scale.
= The Philippines has two monsoons (seasonal winds).
= <b>Habagat</b> is the <b>southwest</b> monsoon, roughly June to September. Warm, moist sea air brings the rainy season.
= <b>Amihan</b> is the northeast monsoon, roughly November to February: cooler, drier air.
* Habagat = SW = wet. Amihan = NE = cool and dry.
fig table Monsoon|Blows from|Months|Brings ;; >Habagat|southwest|≈ Jun–Sep|heavy rains ;; Amihan|northeast|≈ Nov–Feb|cool, dry air
cap Two seasonal winds: Habagat brings the rainy season, Amihan the cool season.

@59 C phys
ref §8B · Motion (projectiles)
Q A ball is thrown at an angle above level ground. Ignoring air resistance, at the highest point of its path
A its velocity and acceleration are both zero.
B its velocity is zero, but its acceleration is 9.8 m/s<sup>2</sup> downward.
C its velocity is horizontal, and its acceleration is 9.8 m/s<sup>2</sup> downward.
D its velocity is horizontal, and its acceleration is zero.
!A If the velocity were zero at the top, the ball would stop and drop straight down. It keeps moving forward, and gravity never switches off.
!B Only the <b>vertical</b> part of the velocity is zero at the top. The horizontal part $v_x$ never changes, so the ball is still moving sideways.
!D The velocity part is right, but gravity still pulls at the top: the acceleration is $g$ downward at <b>every</b> point of the path.
= Split the velocity into parts. Horizontal $v_x$: no horizontal force acts, so it stays <b>constant</b> for the whole flight.
= Vertical $v_y$: gravity shrinks it on the way up, and at the top $v_y = 0$.
= At the top, $v = v_x$ (purely <b>horizontal</b>), and the acceleration is still $g = 9.8\ \text{m/s}^2$ <b>downward</b>.
* In projectile motion, $a = g$ downward everywhere. Only $v_y$ is zero at the top.
cap The horizontal velocity (blue) never changes; the vertical part (green) shrinks to zero at the top. Gravity (red) stays the same.

@60 B phys
ref §8C · Forces
Q A 5.0-kg cart is pulled with a 30-N force while 10 N of friction acts on it. What is its acceleration?
A 2 m/s<sup>2</sup>
B 4 m/s<sup>2</sup>
C 6 m/s<sup>2</sup>
D 8 m/s<sup>2</sup>
!A 2 m/s² is $\frac{10}{5}$: it uses only the friction. Use the <b>net</b> force, pull minus friction.
!C 6 m/s² is $\frac{30}{5}$: it ignores friction. Friction opposes the pull and has to be subtracted.
!D 8 m/s² is $\frac{30 + 10}{5}$: friction was added, but it points the <b>opposite</b> way.
= Newton's 2nd law uses the <b>net</b> force: $F_\text{net} = ma$.
= Forces in opposite directions subtract: $F_\text{net} = 30 - 10 = 20\ \text{N}$.
= $$a = \frac{F_\text{net}}{m} = \frac{20\ \text{N}}{5.0\ \text{kg}} = 4\ \text{m/s}^2$$
* Draw the forces, find the net force (with directions), then divide by the mass.
cap 30 N forward minus 10 N of friction leaves 20 N to accelerate 5 kg.

@61 D phys
ref §8B · Motion (free fall)
Q A stone is dropped from rest from a bridge and hits the water 3.0 s later. About how high is the bridge?
A 14.7 m
B 29.4 m
C 88.2 m
D 44.1 m
!A 14.7 m is $4.9 \times 3$: it forgets to <b>square</b> the time. Distance in free fall grows with $t^2$.
!B 29.4 m is $9.8 \times 3$, the stone's <b>speed</b> at impact (29.4 m/s), not the distance it fell.
!C 88.2 m is $9.8 \times 3^2$: it leaves out the $\tfrac12$ in $d = \tfrac12 gt^2$.
= Dropped from rest means $v_0 = 0$, so $d = \tfrac12 g t^2$.
= $$d = \tfrac12 (9.8)(3.0)^2 = 4.9 \times 9 = 44.1\ \text{m}$$
* Free fall from rest: $d = 4.9t^2$ and $v = 9.8t$. Don't mix them up.
cap By t = 1, 2, 3 s the stone has fallen 4.9, 19.6, and 44.1 m. The gaps grow because it speeds up.

@62 A phys
ref §8D · Work, energy, power, momentum
Q A 2-kg ball is dropped from a height of 5 m. Using $g = 10$ m/s², what is its speed just before it hits the ground?
A 10 m/s
B 5 m/s
C 50 m/s
D 100 m/s
!B 5 m/s just echoes the height (or drops the 2 in $2gh$). The formula gives $\sqrt{2(10)(5)} = \sqrt{100} = 10$.
!C 50 is $g \times h$, which is only $\tfrac{v^2}{2}$. You still need to double it and take the square root.
!D 100 is $v^2$, not $v$. Don't forget the square root: $\sqrt{100} = 10$.
= Energy is conserved: the potential energy at the top becomes kinetic energy at the bottom.
= $$mgh = \tfrac12 mv^2 \quad\Rightarrow\quad v = \sqrt{2gh}$$
= $$v = \sqrt{2(10)(5)} = \sqrt{100} = 10\ \text{m/s}$$
= The mass cancels: with no air resistance, a 2-kg ball and a 20-kg ball land at the same speed.
* $v = \sqrt{2gh}$. Mass doesn't matter in free fall.
cap As the ball falls, potential energy (gold) turns into kinetic energy (blue). The total stays 100 J.

@63 D phys
ref §8H · Electricity
Q Three 6-Ω resistors are connected in parallel across a 12-V battery. What is the total current from the battery?
A 0.67 A
B 2 A
C 18 A
D 6 A
!A 0.67 A treats the resistors as if they were in <b>series</b> ($18\ \Omega$, so $\frac{12}{18}$). In parallel, the total resistance goes <b>down</b>.
!B 2 A is the current through <b>one</b> branch ($\frac{12}{6}$). There are three branches, and their currents add.
!C 18 is the series resistance in ohms ($6 \times 3$), not a current.
= In parallel, every resistor gets the full 12 V.
= Each branch: $I = \dfrac{V}{R} = \dfrac{12}{6} = 2\ \text{A}$. Three branches: $2 + 2 + 2 = 6\ \text{A}$.
= Or use the total resistance: $R_\text{tot} = \dfrac{6}{3} = 2\ \Omega$, so $I = \dfrac{12}{2} = 6\ \text{A}$.
* $n$ equal resistors in parallel: $R_\text{tot} = \frac{R}{n}$. Branch currents add up.
cap Each branch carries 2 A; the battery supplies all three: 6 A.

@64 A phys
ref §8G · Light and optics
Q An object stands 30 cm in front of a concave mirror whose focal length is 10 cm. Where is the image, and what kind is it?
A 15 cm from the mirror; real and inverted
B 15 cm behind the mirror; virtual and upright
C 7.5 cm from the mirror; real and inverted
D 20 cm behind the mirror; virtual and upright
!B The distance is right, but a positive $d_i$ means the image forms <b>in front of</b> the mirror, where the light really meets: real and inverted. A virtual, upright image needs the object inside F.
!C 7.5 cm comes from adding instead of subtracting: $\frac{1}{10} + \frac{1}{30} = \frac{4}{30}$. The mirror equation gives $\frac{1}{d_i} = \frac1f - \frac{1}{d_o}$.
!D A virtual image needs the object <b>closer than F</b> (under 10 cm). This object is beyond C (20 cm), so the image is real.
= Mirror equation: $$\frac{1}{f} = \frac{1}{d_o} + \frac{1}{d_i}$$
= $$\frac{1}{d_i} = \frac{1}{10} - \frac{1}{30} = \frac{3 - 1}{30} = \frac{2}{30} \quad\Rightarrow\quad d_i = 15\ \text{cm}$$
= Positive $d_i$ means a <b>real</b> image in front of the mirror. Magnification $m = -\frac{d_i}{d_o} = -\frac{15}{30} = -\frac12$: <b>inverted</b> and half-size.
= Object beyond C (20 cm) → image between F and C: real, inverted, smaller. ✓
* Concave mirror: object beyond C → image between F and C, real, inverted, smaller. Object inside F → virtual, upright, larger.
cap Two rays from the arrow's tip meet 15 cm from the mirror, forming an upside-down image half as tall.

@65 B phys
ref §8F · Waves and sound
Q A student shouts toward a cliff and hears the echo 2.0 s later. If sound travels at 340 m/s, how far away is the cliff?
A 170 m
B 340 m
C 680 m
D 1,360 m
!A 170 m halves one time too many. The whole trip is $340 \times 2.0 = 680$ m, and half of that is 340 m.
!C 680 m is the <b>round trip</b>, there and back. The cliff is only half that distance away.
!D 1,360 m doubles instead of halving ($340 \times 2 \times 2$).
= In 2.0 s the sound travels $d = vt = 340 \times 2.0 = 680$ m in total.
= An echo goes <b>to the cliff and back</b>, so the one-way distance is half.
= $$d_\text{cliff} = \frac{v t}{2} = \frac{340 \times 2.0}{2} = 340\ \text{m}$$
* Echo, sonar, radar: distance = speed × time ÷ 2.
cap 1 s out, 1 s back: the cliff is 340 m away.

@66 B space
ref §9C · The solar system
Q Which planet is the hottest, even though it is not the closest to the Sun?
A Mercury
B Venus
C Mars
D Jupiter
!A Mercury <b>is</b> the closest to the Sun, so it can't be the answer. With almost no atmosphere, it also loses heat fast; its night side drops to about −180°C.
!C Mars is farther from the Sun than Earth and has a thin atmosphere. It's cold, averaging about −65°C.
!D Jupiter is a gas giant far from the Sun; its cloud tops are about −110°C.
= Venus, second from the Sun, is the hottest planet at about 464°C, hot enough to melt lead.
= Its thick <b>carbon dioxide</b> atmosphere traps heat: a <b>runaway greenhouse effect</b>.
= Mercury is closer but has almost no atmosphere to hold the heat in.
* Hottest planet: Venus (greenhouse effect). Closest: Mercury. Largest: Jupiter.
cap Average temperatures: Venus beats Mercury even though it's farther from the Sun.

@67 C space
ref §9D · Earth, Moon, and Sun
Q A solar eclipse can happen only during which phase of the Moon?
A full moon
B first quarter
C new moon
D third quarter
!A At full moon, <b>Earth</b> is between the Sun and the Moon. That's when a <b>lunar</b> eclipse can happen.
!B At first quarter the Moon is 90° away from the Sun–Earth line, so its shadow misses Earth completely.
!D Third quarter is also 90° off the Sun–Earth line. No alignment, no eclipse.
= A solar eclipse means the Moon blocks the Sun, so the Moon must be <b>between</b> the Sun and Earth.
= In that position the Moon's lit side faces away from us: the <b>new moon</b> phase.
= It doesn't happen every new moon, because the Moon's orbit is tilted about 5°, so its shadow usually passes above or below Earth.
* Solar eclipse → new moon (Sun–Moon–Earth). Lunar eclipse → full moon (Sun–Earth–Moon).
cap Only at new moon does the Moon sit between the Sun and Earth, so its shadow can fall on us.

@68 A space
ref §9A · The universe and stars
Q A light-year is a unit of
A distance.
B time.
C brightness.
D speed.
!B Despite the word "year", it isn't a time. It's how <b>far</b> light travels in one year.
!C Brightness is measured with magnitude or luminosity, not light-years.
!D A speed is distance per time. A light-year is just a distance: the speed of light × one year.
= A light-year is the <b>distance</b> light travels in one year.
= $$300{,}000\ \tfrac{\text{km}}{\text{s}} \times 31{,}557{,}600\ \text{s} \approx 9.46 \times 10^{12}\ \text{km}$$
= Example: Proxima Centauri, the nearest star after the Sun, is about 4.2 light-years away.
* Light-year = distance (speed × time = distance).
fig flow speed of light<br><small>300,000 km/s</small>|× one year of seconds|^≈ 9.46 trillion km<br><small>a distance</small>
cap Speed × time = distance.

@69 B space
ref §9D · Earth, Moon, and Sun
Q Earth has seasons mainly because
A Earth's distance from the Sun changes greatly during the year.
B Earth's axis is tilted about 23.5°.
C the Sun's energy output changes with the seasons.
D the Moon blocks part of the sunlight.
!A Earth's orbit is nearly circular, and Earth is actually <b>closest</b> to the Sun in early January, during the Northern Hemisphere's winter. Distance can't be the cause.
!C The Sun's output is nearly constant all year. Also, when it's summer in the north it's winter in the south, which a changing Sun couldn't explain.
!D The Moon blocks sunlight only during rare solar eclipses, for minutes, not for a whole season.
= Earth's axis is tilted <b>23.5°</b> and keeps pointing the same way in space as Earth orbits.
= When a hemisphere tilts <b>toward</b> the Sun, sunlight hits it more directly and days are longer: summer.
= Six months later it tilts <b>away</b>: slanted sunlight and shorter days, so winter. The other hemisphere has the opposite season.
* Seasons come from the tilt (direct vs. slanted sunlight, and day length), not from distance.
cap The axis keeps pointing the same way, so the hemispheres take turns leaning toward the Sun.

@70 D space
ref §9A · The universe and stars
Q Which star has the hottest surface?
A a red star
B an orange star
C a yellow star
D a blue-white star
!A Red stars are the <b>coolest</b>, around 3,000 K, like a stove coil just starting to glow.
!B Orange stars (about 4,500 K) are cooler than the Sun.
!C Yellow stars like our Sun sit in the middle, about 5,800 K.
= A star's color shows its surface temperature: hotter objects glow at shorter, bluer wavelengths.
= From cool to hot: red → orange → yellow → white → <b>blue</b>.
= Blue-white stars run from about 10,000 K to over 30,000 K.
* Star colors: red is cool, blue is hot (the reverse of faucet labels).
cap Star color tracks surface temperature: red ≈ 3,000 K up to blue ≈ 30,000 K.
`;
