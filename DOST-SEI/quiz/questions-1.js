/* ============================================================
   Question bank, Part I (items 1–35) — from the DOST-SEI reviewer's mock exam.
   Format (one field per line):
     @<id> <answer letter> <topic>      starts a question
     ref  reviewer section to reread
     P    passage key (see %passage blocks)
     Q    question stem (HTML + $math$ allowed)
     qfig figure shown with the question
     A–D  choices
     !A   why choice A is wrong (one line per wrong choice)
     =    one solution step (repeat)
     *    takeaway
     fig  explanation figure: name + args (default: FIGS.q<id>)
     cap  figure caption
   ============================================================ */
window.BANK = (window.BANK || '') + String.raw`

%passage ebb
p In the 1880s, the German psychologist Hermann Ebbinghaus ran an unusual experiment on the only subject he could fully control: himself. He memorized long lists of nonsense syllables such as DAX, BUP, and ZOL, chosen precisely because they meant nothing, so that nothing he already knew could help him. Then he tested how much he still remembered after minutes, hours, and days.
p The results traced what is now called the <i>forgetting curve</i>. Memory dropped steeply at first, with much of a list gone within a day, and then declined more slowly. Ebbinghaus also noticed something more hopeful: each time he relearned a list, he needed less effort, and the list faded more slowly afterward.
p Today this finding underlies <i>spaced repetition</i>, the practice of reviewing material at gradually lengthening intervals. A student who reviews a lesson the next day, again after three days, and again after a week will usually remember far more than one who rereads it five times the night before an exam. Cramming can feel productive, but much of what is crammed quickly evaporates.

@1 B mech
ref §1A · Inertia and accelerating vehicles
Q A glass of water sits in a cup holder of a car moving <b>east</b>. The driver brakes hard. While the car is slowing down, the water surface
A stays level.
B rises on the east side.
C rises on the west side.
D bulges up in the middle.
!A A level surface only happens at a <b>steady</b> speed (no acceleration). Braking changes the speed, so the water can't stay level.
!C That's what happens when the car <b>speeds up</b> going east: the water lags toward the back (west). Braking is the opposite: the water keeps going forward.
!D Braking doesn't make water bulge in the middle. Inertia pushes all of it one way, so the surface tilts as one flat slope.
= The car moves east. Braking means its acceleration points <b>west</b>, opposite the motion.
= The glass slows down with the car, but the water, by inertia (Newton's 1st law), keeps moving east.
= So the water sloshes forward and piles up on the <b>east</b> (front) side. The surface tilts up toward the front.
= General rule: the surface is <b>higher on the side opposite the acceleration</b>. Acceleration west → high side east.
* Find the direction of the acceleration first. Liquids (and you) lurch the opposite way: forward when braking, backward when speeding up.
cap The car brakes (acceleration points west), so the water keeps going east and climbs the front wall.

@2 A mech
ref §1B · Levers and torque
Q A 600-N rock rests on a crowbar 0.5 m from the fulcrum. What effort, applied 1.5 m from the fulcrum on the other side, will just balance it?
A 200 N
B 300 N
C 900 N
D 1800 N
!B 300 N is half of 600 N, but the effort arm is <b>3 times</b> the load arm, not 2 times.
!C 900 N multiplies instead of divides: $600 \times 1.5$. A longer effort arm means you need <b>less</b> force, not more.
!D 1800 N is $600 \times 3$. That's backwards: the 3× longer arm divides the effort by 3.
= A lever balances when the torques are equal: $F_1 d_1 = F_2 d_2$.
= $$600\ \text{N} \times 0.5\ \text{m} = F \times 1.5\ \text{m}$$
= $$300 = 1.5F \quad\Rightarrow\quad F = \frac{300}{1.5} = 200\ \text{N}$$
= Check: the effort arm is 3× longer, so the effort is $\tfrac13$ of the load: $\tfrac{600}{3} = 200$ ✓
* Longer arm, smaller force. Effort × effort arm = load × load arm.
cap The torques balance: 600 N × 0.5 m = 200 N × 1.5 m = 300 N·m.

@3 C mech
ref §1C · Gears, belts, and pulleys
Q Five gears are meshed in a straight line, numbered 1 to 5. Gear 1 has 40 teeth and turns clockwise at 30 rpm. Gear 5 has 20 teeth. How does gear 5 turn?
A clockwise, 15 rpm
B counterclockwise, 60 rpm
C clockwise, 60 rpm
D counterclockwise, 15 rpm
!A The direction is right, but the speed is flipped. A <b>smaller</b> gear (20 teeth) driven by a bigger one (40 teeth) spins <b>faster</b>, not slower.
!B The speed is right, but not the direction. Each mesh flips the direction, and there are 4 meshes (1→2→3→4→5). An even number of flips brings you back to clockwise.
!D Both parts are wrong: an even number of flips keeps gear 5 clockwise, and the smaller gear spins faster, not slower.
= <b>Direction:</b> meshed gears turn opposite ways. 1 CW → 2 CCW → 3 CW → 4 CCW → <b>5 CW</b>. Odd-numbered gears match gear 1.
= <b>Speed:</b> (teeth) × (rpm) is the same for every gear in the train, because the teeth pass each contact point at the same rate. The middle gears cancel out.
= $$40 \times 30 = 20 \times n_5$$
= $$n_5 = \frac{1200}{20} = 60\ \text{rpm}$$
* Odd gears turn like gear 1. Idler gears in the middle change the direction, not the final speed.
cap Each mesh flips the direction. Gear 5 (20 teeth) makes 2 turns for every 1 turn of gear 1 (40 teeth).

@4 B mech
ref §1C · Gears, belts, and pulleys
Q In a block and tackle, four rope segments support the movable pulley. Ignoring friction, what effort lifts an 800-N load, and how much rope must be pulled to raise the load 1 m?
A 200 N; 1 m of rope
B 200 N; 4 m of rope
C 800 N; 4 m of rope
D 400 N; 2 m of rope
!A The force is right, but you don't get it for free. Dividing the force by 4 means pulling <b>4 times</b> as much rope (work in = work out).
!C 800 N is the full load: what you'd pull with no pulley system at all. Four supporting segments share the load.
!D These numbers fit a single movable pulley with <b>2</b> supporting segments. Here 4 segments hold the load, so MA = 4.
= Mechanical advantage of a block and tackle = number of rope segments holding up the movable block: $\text{MA} = 4$.
= $$\text{Effort} = \frac{\text{Load}}{\text{MA}} = \frac{800\ \text{N}}{4} = 200\ \text{N}$$
= Work is conserved in an ideal machine: work in = work out.
= $$200\ \text{N} \times d = 800\ \text{N} \times 1\ \text{m} \quad\Rightarrow\quad d = 4\ \text{m}$$
* Machines trade force for distance. ¼ of the force means 4× the rope.
cap Four segments each hold 200 N. To lift the block 1 m, every segment shortens by 1 m, so you pull 4 m.

@5 D mech
ref §1I · Circuits and bulbs
Q Identical bulbs P and Q are connected in parallel, and this pair is connected in series with an identical bulb R across a battery. If bulb Q burns out, what happens to P and R?
A P gets dimmer and R gets brighter.
B Both P and R get brighter.
C Both P and R go out.
D P gets brighter and R gets dimmer.
!A Exactly reversed. Losing Q makes the total resistance go <b>up</b>, so less total current flows through R (dimmer). But P no longer shares its branch, so it gets more current (brighter).
!B Both can't brighten: the total resistance rises from $1.5R$ to $2R$, so the battery supplies <b>less</b> total current, and R carries all of it.
!C Only Q's own path breaks. P still forms a complete loop with R and the battery, so current still flows through both.
= Let each bulb have resistance $R$ and the battery voltage be $V$. Brightness follows power, $P = I^2R$: more current, brighter bulb.
= <b>Before:</b> P ∥ Q gives $\tfrac{R}{2}$; add R in series: $R_\text{tot} = 1.5R$, so $I = \dfrac{V}{1.5R} \approx 0.67\dfrac{V}{R}$. R carries all of it; P carries half, $\approx 0.33\dfrac{V}{R}$.
= <b>After Q burns out:</b> P and R are simply in series: $R_\text{tot} = 2R$, so $I = 0.50\dfrac{V}{R}$ through both.
= R: $0.67 \to 0.50$, <b>dimmer</b>. P: $0.33 \to 0.50$, <b>brighter</b>.
* Removing a parallel branch raises the total resistance: the total current drops, but the surviving branch-mate gets the whole branch current.
cap Glow shows power. Before: R carries 0.67 V/R and P only 0.33. After Q opens, both carry 0.50.

@6 C mech
ref §1F · Fluids
Q Three small holes are punched, one above another, on the side of a tall plastic bottle full of water. From which hole does water spurt out fastest?
A the top hole
B the middle hole
C the bottom hole
D all three equally
!A The top hole has the <b>least</b> water above it, so the pressure there is lowest and water comes out slowest.
!B The middle hole beats the top one, but the bottom hole has even more water above it.
!D Pressure in a liquid isn't the same everywhere: it grows with depth ($P = \rho g h$). Equal jets would need equal depths.
= Liquid pressure depends on depth: $P = \rho g h$, where $h$ is the depth below the surface.
= The bottom hole has the greatest $h$, so the greatest pressure pushes water out of it.
= Greater pressure → faster jet. (In the ideal case, $v = \sqrt{2gh}$: Torricelli's law.)
* Deeper means more pressure and a faster jet. That's why dams are thicker at the bottom.
cap Pressure grows with depth (arrows inside), so the deepest hole shoots the fastest jet.

@7 A mech
ref §1F · Fluids (Bernoulli)
Q During a typhoon, strong wind sometimes lifts the roof off a house even though the wind blows sideways. The best explanation is that
A fast-moving air above the roof has lower pressure than the still air inside the house.
B the wind pushes down on the roof harder than on the walls.
C the heated roof expands and pops off its nails.
D the air inside the house cools and pulls the roof upward.
!B A push <b>down</b> would press the roof onto the house, not lift it off. The net force on a lifted roof points up.
!C Typhoons aren't about heat. Thermal expansion of a roof is tiny, and it happens on hot sunny days, not in storms.
!D Cooled air contracts and its pressure drops, which would pull the roof <b>down</b>. And air can only push, never pull.
= Bernoulli's principle: where a fluid moves <b>faster</b>, its pressure is <b>lower</b>.
= The typhoon wind races over the roof, so the pressure above it drops. The air inside the closed house is still, at normal (higher) pressure.
= That pressure difference acts on the roof's large area, giving a big upward net force. The roof lifts off like an airplane wing.
* Fast air = low pressure. It's the same reason kites and wings get lift.
cap Fast wind over the roof means low pressure above; the still air inside pushes up harder.

@8 A mech
ref §1E · Stability and center of gravity
Q Four identical bottles each hold the same amount of sand. Which is LEAST likely to tip over when bumped?
A standing upright, with the sand settled at the bottom
B standing upside down on its cap, with the sand settled in the neck
C standing upright, with the sand stuck to the inside near the top
D standing upside down on its cap, with the sand stuck near the (now upturned) bottom
!B Its center of gravity is low, but it balances on the tiny cap. With a narrow base, even a small tilt moves the CG past the edge.
!C It has the wide base, but the sand up high raises the center of gravity, so a small tilt topples it.
!D This is the worst of the four: a narrow base (the cap) <b>and</b> a high center of gravity.
= An object tips over when the vertical line through its <b>center of gravity (CG)</b> falls outside its base.
= Two things make it stable: a <b>low CG</b> and a <b>wide base</b>.
= Upright with the sand at the bottom (A) has both: the widest base and the lowest CG. It's the hardest to tip.
* Low CG + wide base = stable. That's why racing cars are built low and wide.
cap Tilt both the same amount: A's CG line stays inside its base, so it rocks back. D's falls outside, so it topples.

@9 B spatial
ref §2A · Figure series
Q Which figure comes next in the series?
qfig series
A [[frame -45 1]]
B [[frame -45 0]]
C [[frame -90 0]]
D [[frame 45 0]]
!A The arrow is right (down-right), but the small square should be <b>empty</b>. It alternates filled, empty, filled, so the 4th is empty.
!C The square is right (empty), but this arrow points straight down: a 90° jump. The arrow turns only <b>45°</b> per step.
!D The square is right, but this arrow points up-right, back to frame 2's direction instead of continuing clockwise.
= Track one feature at a time. <b>Arrow:</b> up → up-right → right. Each step turns <b>45° clockwise</b>, so next is <b>down-right</b>.
= <b>Small square:</b> filled → empty → filled. It alternates, so next is <b>empty</b>.
= The answer must obey both rules: down-right arrow + empty square = <b>B</b>.
* Check each attribute separately (rotation, shading, count), then find the one choice that obeys every rule.
cap The arrow turns 45° clockwise each step while the corner square alternates filled and empty.

@10 A spatial
ref §2B · Paper folding and hole punching
Q A square sheet of paper is folded in half along its vertical center line, left half onto right half. A hole is then punched through both layers near the folded sheet's upper-right corner. When the sheet is unfolded, where are the holes?
A near the upper-left and upper-right corners
B near the upper-right and lower-right corners
C one hole, near the upper-right corner only
D side by side, near the middle of the top edge
!B A vertical fold mirrors <b>left ↔ right</b>, not top ↔ bottom. The second hole stays at the same height and moves to the other side.
!C The punch goes through <b>both</b> layers, so there are two holes, one in each half.
!D The hole is near the outer (right) edge, far from the fold. Its mirror image is just as far from the fold on the other side: the far left, not right next to it.
= After folding left onto right, the folded sheet sits on the right half. Its upper-right corner is the whole sheet's upper-right corner.
= The punch makes a hole in both layers: the right half and the folded-over left half.
= Unfolding mirrors that hole across the fold line (the vertical center line): same height, same distance from the fold, other side.
= So the holes are near the <b>upper-left</b> and <b>upper-right</b> corners.
* Unfold in reverse order. Each unfold mirrors every hole across that fold line.
cap Unfolding swings the left half back across the center line, carrying a mirror-image hole.

@11 D spatial
ref §2C · Cube nets and dice
Q The net below is folded into a cube. Which face is opposite face 1?
qfig net
A 2
B 3
C 6
D 4
!A Face 2 shares an edge with face 1 in the net. Faces that touch in a net are <b>neighbors</b> on the cube, never opposite.
!B When the cube folds, face 1 becomes a side wall standing on base 3. They share an edge: neighbors, not opposite.
!C Face 6 ends up as the front wall and face 1 as the left wall, which share an edge. 6 is opposite 2.
= Pick a base: lay face <b>3</b> flat and fold the others up around it.
= 2 (above 3) folds up as the <b>back</b> wall. 1, attached to 2's left side, swings around to be the <b>left</b> wall.
= 4 (right of 3) folds up as the <b>right</b> wall. 5 folds over as the <b>lid</b>. 6 (below 5) drops down as the <b>front</b> wall.
= Left (1) faces right (4): <b>1 is opposite 4</b>. The other pairs are 3–5 and 2–6.
* Faces that touch in the net are never opposite. In a straight row of three faces, the 1st and 3rd are opposite (here 3–4–5 gives 3 and 5).
cap Watch the net fold: the gold faces 1 and 4 end up facing each other.

@12 D spatial
ref §2C · Cube nets and dice
Q On a standard die, which two numbers can NEVER be seen at the same time?
A 1 and 2
B 2 and 6
C 4 and 5
D 3 and 4
!A 1 and 2 are neighbors (1 is opposite 6, 2 is opposite 5), so you can see both from a corner.
!B 2 and 6 are neighbors: 2 sits opposite 5 and 6 sits opposite 1. Look at the right corner and both are in view.
!C 4 and 5 are neighbors: 4 is opposite 3 and 5 is opposite 2.
= On a standard die, opposite faces add up to <b>7</b>: 1–6, 2–5, 3–4.
= You see at most 3 faces at once, and they all meet at one corner, so they're neighbors. A face and its opposite are never in view together.
= The only opposite pair among the choices is <b>3 and 4</b> ($3 + 4 = 7$).
* Die rule: opposite faces sum to 7, and opposite faces are never visible at the same time.
cap The die keeps turning, but the gold faces 3 and 4 never show at the same time.

@13 A spatial
ref §2D · Rotation versus reflection
Q A card printed with the word <b>GRAVITY</b> stands upright facing a plane mirror. Which shows its image in the mirror?
A <span class="mx">GRAVITY</span>
B <span class="r180">GRAVITY</span>
C <span class="my">GRAVITY</span>
D YTIVARG
!B That's the word turned upside down (a 180° rotation). A mirror doesn't rotate; it flips.
!C That's the image in a <b>horizontal</b> mirror, like a lake reflecting a sign (top ↔ bottom). This card faces an upright mirror.
!D Only the letter order is reversed; each letter still faces the normal way. A real mirror flips every letter too (look at the G and the R).
= An upright plane mirror reverses <b>left ↔ right</b>, and nothing else: the top stays on top.
= Everything flips: the letter order (G ends up on the right) <b>and</b> each letter's shape (G and R face backward).
= That's a horizontal flip of the whole word: choice <b>A</b>. It's why AMBULANCE is printed backward on the hood.
* Upright mirror = flip left↔right. Water mirror = flip top↔bottom. A 180° turn is neither.
cap The upright mirror flips the word left-to-right: the letter order and the letter shapes both reverse.

@14 B spatial
ref §2D · Rotation versus reflection
Q Which is a ROTATION (not a mirror image) of the letter-shape <span class="bigF fglyph">F</span>?
A <span class="mx bigF fglyph">F</span>
B <span class="r180 bigF fglyph">F</span>
C <span class="my bigF fglyph">F</span>
D <span class="r90m bigF fglyph">F</span>
!A This is F flipped left↔right: a mirror image. No amount of turning can produce it.
!C This is F flipped top↔bottom. A flip reverses the shape's handedness, so it's a reflection, not a rotation.
!D This one is flipped <b>and then</b> turned 90°. Turning a mirror image keeps it a mirror image.
= A rotation keeps the shape's <b>handedness</b>; a reflection reverses it.
= Test: turn choice B back by 180° and you get exactly F again. ✓
= A and C are single flips, and D is a flip plus a turn, so all three are mirror images.
* You can rotate an F as much as you like and it never becomes a backward F. A rotation keeps the order of features around the shape; a mirror reverses it.
cap Spin F by 180° and it lands exactly on choice B. The flipped F can never be reached by turning.

@15 C spatial
ref §2E · Assembling pieces and counting
Q A $4\times4\times4$ cube is painted on all its faces, then cut into 64 unit cubes. How many unit cubes have paint on exactly two faces?
A 8
B 16
C 24
D 36
!A 8 is the number of <b>corner</b> cubes, and corners have <b>three</b> painted faces, not two.
!B 16 would be 2 cubes on each of 8 edges, but a cube has <b>12</b> edges, not 8.
!D 36 is too many. Only edge cubes that aren't corners have exactly two painted faces: 2 per edge × 12 edges.
= Two painted faces means the little cube sits on an <b>edge</b> of the big cube, but not at a corner (corners have 3).
= Each edge has 4 cubes. Remove the 2 corners: $4 - 2 = 2$ per edge.
= A cube has <b>12</b> edges: $$12 \times (n - 2) = 12 \times 2 = 24$$
= Check the total: 8 (three faces) + 24 (two) + 24 (one face: $6(n-2)^2$) + 8 (none: $(n-2)^3$) = 64 ✓
* Painted n×n×n cube: corners 8, edges 12(n−2), face centers 6(n−2)², hidden (n−2)³.
cap Blue cubes sit on an edge but not a corner: 2 per edge, 12 edges.

@16 D verbal
ref §3B · Word roots worth knowing
Q HYDRO : WATER :: PYRO : ______
A air
B stone
C light
D fire
!A The root for air is <b>aero</b> (aerospace) or <b>pneumo</b> (pneumonia), not pyro.
!B The root for stone is <b>litho</b> (lithograph) or <b>petro</b> (petroleum, "rock oil").
!C The root for light is <b>photo</b> (photosynthesis).
= Make a bridge from the first pair: "<b>hydro</b> is the root that means <b>water</b>" (hydroelectric, dehydrate).
= Apply the same bridge: "<b>pyro</b> is the root that means ____."
= Pyro means <b>fire</b>: pyrotechnics (fireworks), pyroclastic flow.
* Make a bridge sentence from the first pair, then test each choice in the same sentence.
fig bridge HYDRO|water|PYRO|fire|is the root for
cap Same bridge both times: "is the root that means".

@17 C verbal
ref §3C · Scientists and their work
Q LAVOISIER : CONSERVATION OF MASS :: MENDEL : ______
A evolution by natural selection
B the periodic table
C laws of inheritance
D the cell theory
!A Evolution by natural selection is <b>Darwin's</b> work.
!B The periodic table is <b>Mendeleev's</b>. Careful: Mendel and Mendeleev are different people.
!D The cell theory came from <b>Schleiden, Schwann, and Virchow</b>.
= Bridge: "<b>Lavoisier</b> is known for the law of <b>conservation of mass</b>."
= Same bridge: "<b>Mendel</b> is known for ____."
= Gregor Mendel, the monk who bred pea plants, found the <b>laws of inheritance</b> (segregation and independent assortment).
* Mendel = genetics (peas). Mendeleev = periodic table.
fig table Scientist|Known for ;; Lavoisier|conservation of mass ;; >Mendel|laws of inheritance ;; Darwin|evolution by natural selection ;; Mendeleev|periodic table ;; Schleiden, Schwann, Virchow|cell theory
cap Each distractor belongs to a different scientist.

@18 D verbal
ref §3A · Solving analogies
Q THERMOMETER : TEMPERATURE :: ANEMOMETER : ______
A air pressure
B humidity
C wind direction
D wind speed
!A Air pressure is measured by a <b>barometer</b> ("baro" = pressure).
!B Humidity is measured by a <b>hygrometer</b>.
!C Wind direction is shown by a <b>wind vane</b>. The anemometer's spinning cups measure how <b>fast</b> the wind blows.
= Bridge: "A <b>thermometer</b> measures <b>temperature</b>."
= Same bridge: "An <b>anemometer</b> measures ____." (anemo = wind, -meter = measure)
= Its cups spin faster in stronger wind, so it measures <b>wind speed</b>.
* Weather instruments: thermometer (temperature), barometer (pressure), hygrometer (humidity), anemometer (wind speed), wind vane (direction), rain gauge (rainfall).
cap An anemometer's cups spin faster as the wind gets stronger.

@19 B verbal
ref §3A · Solving analogies (degree)
Q WARM : HOT ::
A cold : ice
B drizzle : downpour
C rain : cloud
D fast : slow
!A Ice isn't a stronger degree of cold; it's a thing that <b>is</b> cold. That pair mixes a quality with an object.
!C Clouds produce rain: a <b>source–product</b> relationship, not a degree.
!D Fast and slow are <b>opposites</b>. Warm and hot point the same way, just at different strengths.
= Bridge: "<b>Hot</b> is a <b>stronger degree</b> of <b>warm</b>." Same quality (temperature), milder first.
= Test each choice: "A <b>downpour</b> is a stronger degree of a <b>drizzle</b>." Both are rain, light → heavy. ✓
= The order matches too: milder first, stronger second.
* Degree analogies: same quality, same order (mild → strong). Both words must be the same kind of thing.
fig bridge warm|hot|drizzle|downpour|turned up to
cap Same quality, stronger: light rain → heavy rain, just like warm → hot.

@20 D verbal
ref §3D · Logic (syllogisms)
Q All metals conduct electricity. Some solids are metals. Which statement must be true?
A All solids conduct electricity.
B No solid conducts electricity.
C All conductors are metals.
D Some solids conduct electricity.
!A Only <b>some</b> solids are metals. The solids outside the metal circle might not conduct, so "all" goes too far.
!B This contradicts the statements: the solids that are metals <b>must</b> conduct.
!C "All metals are conductors" doesn't flip into "all conductors are metals". The conductor circle can hold other things too.
= Draw it: the <b>metals</b> circle sits entirely inside the <b>conductors</b> circle ("all metals conduct").
= The <b>solids</b> circle overlaps the metals circle ("some solids are metals").
= That overlap lies inside the conductors circle, so at least some solids conduct: <b>some solids conduct electricity</b>.
* Use only what's given. "All A are B" never means "all B are A".
cap The solids–metals overlap (gold) lies inside the conductors circle.

@21 A verbal
ref §3D · Logic (comparisons)
Q Ana is taller than Ben. Carlo is shorter than Ben. Dina is taller than Ana. Who is the second tallest?
A Ana
B Ben
C Carlo
D Dina
!B Ben is shorter than Ana, who is shorter than Dina. Two people are taller than Ben, so he's third.
!C Carlo is shorter than Ben, so he's the shortest of all.
!D Dina is taller than Ana, who is taller than everyone else: Dina is the <b>tallest</b>, not second.
= Line them up one clue at a time. Ana > Ben.
= Carlo < Ben: Ana > Ben > Carlo.
= Dina > Ana: <b>Dina > Ana > Ben > Carlo</b>.
= Second tallest: <b>Ana</b>.
* Place people on a line as you read each clue instead of holding it all in your head.
cap The clues give the order Dina, Ana, Ben, Carlo.

@22 C verbal
ref §3E · Series and codes
Q What comes next? &nbsp; B, E, I, N, ____
A S
B R
C T
D U
!A S is the 19th letter, $14 + 5$: it repeats the last jump. The jumps keep growing (+3, +4, +5), so next is <b>+6</b>.
!B R is the 18th letter, $14 + 4$. The gap grows by one each time, so the next gap is 6, not 4.
!D U is the 21st letter, $14 + 7$: one step too far.
= Turn letters into positions: B = 2, E = 5, I = 9, N = 14.
= Differences: $5-2 = 3,\ 9-5 = 4,\ 14-9 = 5$. Each jump is 1 bigger.
= Next jump is 6: $14 + 6 = 20$ → <b>T</b>.
* Turn letters into numbers (EJOTY: E5, J10, O15, T20, Y25), then look at the differences.
cap Jumps of +3, +4, +5, then +6 land on T, the 20th letter.

@23 B lang
ref §4A · Subject–verb agreement
Q Which underlined part shows an ERROR?<br>Each of the students <u>who joined</u><sub>A</sub> the science fair <u>have submitted</u><sub>B</sub> <u>a research paper</u><sub>C</sub> <u>to the panel</u><sub>D</sub> before the deadline.
A A
B B
C C
D D
!A "Who joined" is fine: <i>who</i> refers to the students, and <i>joined</i> is a correct past-tense verb.
!C "A research paper" is fine: each student submits one paper, so the singular is right.
!D "To the panel" is a correct phrase: you submit something <i>to</i> someone.
= Find the real subject. "Of the students" only describes it; the subject is <b>Each</b>.
= <i>Each</i> is always <b>singular</b> (each one).
= A singular subject takes a singular verb: <b>has</b> submitted, not <i>have</i> submitted.
* Each, every, either, neither, everyone, nobody take a singular verb. Cross out the "of ..." phrase to find the subject.
fig fix Each of the students who joined the science fair |have submitted|has submitted| a research paper to the panel before the deadline.|Subject = <b>Each</b> (singular), so the verb is <b>has</b>.
cap Cross out "of the students": Each ... has submitted.

@24 A lang
ref §4A · Pronoun case
Q Which underlined part shows an ERROR?<br><u>Between you and I</u><sub>A</sub>, the results of the experiment <u>were</u><sub>B</sub> <u>more surprising</u><sub>C</sub> than <u>we expected</u><sub>D</sub>.
A A
B B
C C
D D
!B "Were" is fine: the subject is <i>results</i> (plural). "Of the experiment" doesn't change that.
!C "More surprising" is the correct comparative for a long adjective (there's no "surprisinger").
!D "We expected" is fine: <i>we</i> is the subject of <i>expected</i>.
= <i>Between</i> is a preposition, and a pronoun after a preposition takes the <b>object</b> form.
= Object pronouns: me, him, her, us, them. So: between you and <b>me</b>.
= Quick test: drop "you and". You'd say "between <b>me</b>", never "between I".
* After prepositions (between, to, for, with): me, him, her, us, them.
fig fix |Between you and I|Between you and me|, the results of the experiment were more surprising than we expected.|<b>Between</b> is a preposition, so use the object pronoun <b>me</b>.

@25 C lang
ref §4A · Parallelism
Q Which underlined part shows an ERROR?<br>The volunteers <u>sorted the donations</u><sub>A</sub>, <u>packed them</u><sub>B</sub>, <u>and were delivering them</u><sub>C</sub> <u>to the evacuees</u><sub>D</sub>.
A A
B B
C C
D D
!A "Sorted the donations" sets the pattern (simple past). It's correct.
!B "Packed them" follows the pattern (simple past). Correct.
!D "To the evacuees" correctly says where the donations went.
= Actions listed in a series must share the same form: <b>parallelism</b>.
= Sorted ✓, packed ✓ (simple past), then "were delivering" switches to the past progressive ✕.
= Fix: sorted the donations, packed them, and <b>delivered</b> them.
* Items joined by and/or share one grammatical form.
fig fix The volunteers sorted the donations, packed them, |and were delivering them|and delivered them| to the evacuees.|sorted · packed · <b>delivered</b>: all simple past

@26 D lang
ref §4B · Look-alike words
Q Her research findings will greatly ______ the way farmers manage their crops.
A effect
B effects
C affects
D affect
!A <i>Effect</i> is usually a <b>noun</b> (a result). As a verb it means "to bring about", which doesn't fit: the findings will <i>influence</i> the way, not create it.
!B <i>Effects</i> is a plural noun (or an -s verb form). After <i>will</i> you need the base form, and the meaning should be "influence".
!C <i>Affects</i> has the right meaning but the wrong form: after the helping verb <i>will</i>, use the base form (no -s).
= Meaning needed: the findings will <b>influence</b> farming, so the verb is <i>affect</i>.
= Form needed: after <i>will</i> (a helping verb) comes the <b>base form</b>: will affect, not will affects.
= So: will greatly <b>affect</b>.
* <b>A</b>ffect = <b>A</b>ction (verb); <b>E</b>ffect = <b>E</b>nd result (noun). After will, can, or did, use the base form.
fig fix Her research findings will greatly |_|affect| the way farmers manage their crops.|A verb meaning "influence", in the base form after <b>will</b>.

@27 A lang
ref §4A · Comparisons (fewer vs. less)
Q The laboratory has ______ microscopes than the school needs.
A fewer
B less
C lesser
D least
!B <i>Less</i> is for things you <b>can't count</b> (less water, less time). Microscopes can be counted.
!C <i>Lesser</i> means "smaller in importance" (a lesser evil), and it isn't followed by "than".
!D <i>Least</i> is a superlative ("the least"), so it can't be followed by "than".
= Microscopes are <b>countable</b>: you can say "three microscopes".
= Countable plural nouns take <b>fewer</b>; uncountable nouns take <b>less</b>.
= "...has <b>fewer</b> microscopes than the school needs." The word "than" also calls for a comparative.
* Fewer = countable (fewer books). Less = uncountable (less sugar).
fig table Fewer (countable)|Less (uncountable) ;; >fewer microscopes|less equipment ;; fewer students|less time ;; fewer glasses of water|less water
cap Can you put a number in front of it? Then use fewer.

@28 B lang
ref §4D · Functional English
Q Which is the most appropriate response that <i>grants</i> the request?<br><i>"Would you mind if I borrowed your calculator?"</i>
A "Yes, I would. Here it is."
B "Not at all. Go ahead."
C "Yes, please."
D "No, you can't mind."
!A "Yes, I would" means "yes, I <b>would</b> mind" (I object), and then it hands the calculator over anyway. It contradicts itself.
!C "Yes, please" accepts an <b>offer</b> ("Would you like...?"). Here it would even mean "yes, I mind".
!D This makes no sense: the speaker isn't asking whether <b>they</b> may mind.
= "Would you mind...?" literally asks: "<b>Would it bother you</b> if I borrowed it?"
= To <b>grant</b> the request, say it would <b>not</b> bother you: "Not at all."
= "Go ahead" then gives the permission clearly.
* "Do/Would you mind...?" → "Not at all" or "No, go ahead" means yes, you may.
fig chat Would you mind if I borrowed your calculator?|Not at all. Go ahead.|"Would you mind?" = "Is it a problem?", so "Not at all" = "No problem."

@29 C lang
ref §4E · Vocabulary
Q Which pair of words are ANTONYMS?
A candid – frank
B frugal – thrifty
C verbose – terse
D amiable – friendly
!A Candid and frank both mean <b>honest and direct</b>: synonyms.
!B Frugal and thrifty both mean <b>careful with money</b>: synonyms.
!D Amiable and friendly both mean <b>pleasant and kind</b>: synonyms.
= Antonyms are opposites, so check each pair's meaning.
= <b>Verbose</b> = using too many words. <b>Terse</b> = using very few words.
= Wordy vs. brief: the only opposite pair.
* When three pairs are synonyms, the odd one out is your antonym pair.
fig pairs candid|=|frank|honest, direct ;; frugal|=|thrifty|careful with money ;; >verbose|≠|terse|wordy vs. brief ;; amiable|=|friendly|pleasant, kind

@30 A lang
ref §4F · Idioms
Q "After weeks of review, the final exam was a <i>piece of cake</i> for Lia." The idiom means the exam was
A very easy.
B a reward.
C a celebration.
D very difficult.
!B Cake can be a treat, but this idiom isn't about rewards. It describes how <b>easy</b> something is.
!C Cake shows up at celebrations, but an idiom doesn't mean its literal words.
!D That's the opposite. The context agrees: after weeks of review, the exam felt easy.
= An idiom's meaning differs from its literal words.
= "A piece of cake" means <b>something very easy to do</b>.
= Context check: she reviewed for weeks, so the exam felt easy. ✓
* Use the context to confirm what an idiom means.
fig table Idiom|Meaning ;; >a piece of cake|very easy ;; hit the books|study hard ;; break a leg|good luck ;; under the weather|feeling sick ;; once in a blue moon|very rarely

@31 B lang
ref §4H · Literature essentials
Q "The wind whispered secrets through the bamboo grove." This line uses
A simile.
B personification.
C hyperbole.
D onomatopoeia.
!A A simile compares using <b>like</b> or <b>as</b> ("the wind was like a whisper"). There's no like or as here.
!C Hyperbole is extreme <b>exaggeration</b> ("I've told you a million times"). Nothing is exaggerated.
!D Onomatopoeia is a word that <b>imitates a sound</b> (buzz, swoosh). Here "whispered" is an action given to the wind.
= Wind can't really whisper or keep secrets: those are <b>human</b> actions.
= Giving human qualities or actions to something non-human is <b>personification</b>.
* Personification = a thing acts like a person.
fig table Figure of speech|What it does|Example ;; Simile|compares using like/as|brave as a lion ;; >Personification|gives human traits to things|the wind whispered ;; Hyperbole|exaggerates|so hungry I could eat a horse ;; Onomatopoeia|imitates a sound|buzz, sizzle

@32 B lang
ref §4H · Literature essentials
Q Which work by José Rizal is the sequel to <i>Noli Me Tángere</i>?
A <i>Florante at Laura</i>
B <i>El Filibusterismo</i>
C "Mi Último Adiós"
D <i>Dekada '70</i>
!A <i>Florante at Laura</i> is by <b>Francisco Balagtas</b> (1838), not Rizal.
!C "Mi Último Adiós" is by Rizal, but it's a <b>poem</b> written just before his execution (1896), not a novel.
!D <i>Dekada '70</i> is a modern novel by <b>Lualhati Bautista</b>, set during martial law.
= Rizal wrote two novels: <i>Noli Me Tángere</i> (1887) and its sequel, <b><i>El Filibusterismo</i></b> (1891).
= The <i>Fili</i> continues the story: Ibarra returns in disguise as the jeweler Simoun.
* Noli (1887) → Fili (1891). Balagtas wrote Florante at Laura.
fig table Work|Author|Year ;; <i>Noli Me Tángere</i>|José Rizal (novel)|1887 ;; ><i>El Filibusterismo</i>|José Rizal (sequel novel)|1891 ;; "Mi Último Adiós"|José Rizal (poem)|1896 ;; <i>Florante at Laura</i>|Francisco Balagtas|1838 ;; <i>Dekada '70</i>|Lualhati Bautista|1980s

@33 D lang
ref §4G · Reading comprehension
P ebb
Q Which best states the main idea of the passage?
A Ebbinghaus preferred nonsense syllables to real words.
B Memory declines at a constant rate over time.
C Students should never study the night before an exam.
D Research on forgetting shows that spaced review helps memory more than cramming.
!A True, but it's a small <b>detail</b> about his method, one sentence of paragraph 1, not what the whole passage is about.
!B This misstates the passage: memory dropped <b>steeply at first</b>, then more slowly. That isn't a constant rate.
!C Too extreme. The passage says cramming works less well, not that you must <b>never</b> study the night before.
= A main idea has to cover the <b>whole</b> passage, not one paragraph.
= ¶1: the experiment. ¶2: the forgetting curve and relearning. ¶3: what it means today: spaced review beats cramming.
= Only D ties all three together.
* The main idea is the umbrella over every paragraph. Watch for true-but-narrow details and extreme words (never, always).
cap The forgetting curve drops fast. Each spaced review resets it, and memory then fades more slowly.

@34 C lang
ref §4G · Reading comprehension
P ebb
Q As used in the last sentence, <i>evaporates</i> most nearly means
A turns into vapor.
B becomes clearer.
C is quickly forgotten.
D spreads to others.
!A That's the literal science meaning, but crammed lessons aren't water. The word is used <b>figuratively</b> here.
!B That's the opposite: the passage is about memories fading, not getting clearer.
!D Nothing in the passage is about sharing knowledge with others.
= Read the sentence: "Cramming can feel productive, but much of what is crammed quickly <i>evaporates</i>."
= The "but" sets up a contrast with "feels productive": the crammed material doesn't last.
= Like water vanishing into the air, crammed material quickly <b>disappears from memory</b>.
* For vocabulary in context, swap each choice into the sentence and reread it.
fig quote Cramming can feel productive, {{but much of what is crammed quickly evaporates}}. Like water vanishing into the air, it disappears from memory.

@35 C lang
ref §4G · Reading comprehension
P ebb
Q Why did Ebbinghaus use nonsense syllables?
A to make the experiment entertaining
B because they were shorter than real words
C to keep what he already knew from helping him remember
D to test other people's memories
!A The passage never mentions fun. It gives a specific scientific reason.
!B Length isn't the reason given. The passage says he chose them because they "meant nothing".
!D He tested only <b>himself</b>: "the only subject he could fully control: himself."
= Find the sentence that gives the reason (look for "because" or "so that").
= "...chosen precisely <b>because they meant nothing, so that nothing he already knew could help him</b>."
= Real words carry meanings and memories that would make some of them easier to recall, which would spoil the test.
* For "why" questions, find the "because" or "so that" sentence in the passage.
fig quote He memorized long lists of nonsense syllables such as DAX, BUP, and ZOL, {{chosen precisely because they meant nothing, so that nothing he already knew could help him}}.
`;
