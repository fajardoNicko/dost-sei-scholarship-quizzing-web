/* Question bank, Part III (items 71–100): Mathematics. Format: see questions-1.js. */
window.BANK = (window.BANK || '') + String.raw`

@71 A alg
ref §10B · Algebra essentials (exponents)
Q Simplify $(2x^3y^{-2})^2\cdot3xy^5$.
A $12x^7y$
B $6x^7y$
C $12x^6y^3$
D $12x^7y^9$
!B 6 comes from not squaring the 2. Squaring the bracket squares <b>every</b> factor: $2^2 = 4$, then $4 \times 3 = 12$.
!C Two slips: $y^{-2}$ wasn't squared (so $y^{-2} \cdot y^5 = y^3$), and the lone $x$ in $3xy^5$ was dropped ($x^6 \cdot x = x^7$).
!D $y^9$ treats $(y^{-2})^2$ as $y^{+4}$. A negative exponent stays negative: $(y^{-2})^2 = y^{-4}$, and $y^{-4} \cdot y^5 = y^1$.
= Power of a product: raise every factor to the power. $$(2x^3y^{-2})^2 = 2^2 x^{6} y^{-4} = 4x^6y^{-4}$$
= Multiply: coefficients multiply, and exponents of the same base <b>add</b>. $$4x^6y^{-4} \cdot 3xy^5 = 12\,x^{6+1}\,y^{-4+5}$$
= $$= 12x^7y$$
* $(a^m)^n = a^{mn}$ and $a^m \cdot a^n = a^{m+n}$. Raise the coefficient too.

@72 B alg
ref §10C · Quadratics and functions
Q For what values of $k$ does $x^2+kx+9=0$ have exactly one real root?
A $\pm3$
B $\pm6$
C $\pm9$
D $\pm18$
!A With $k = 3$: $D = 9 - 36 = -27 < 0$, so there are <b>no</b> real roots. 3 is the square root of 9, not the right $k$.
!C With $k = 9$: $D = 81 - 36 = 45 > 0$, so there are <b>two</b> real roots.
!D With $k = 18$: $D = 324 - 36 = 288 > 0$, also two real roots.
= Exactly one real root (a double root) means the <b>discriminant</b> is zero: $b^2 - 4ac = 0$.
= Here $a = 1$, $b = k$, $c = 9$: $$k^2 - 4(1)(9) = 0 \;\Rightarrow\; k^2 = 36 \;\Rightarrow\; k = \pm 6$$
= Check: $x^2 + 6x + 9 = (x+3)^2$ and $x^2 - 6x + 9 = (x-3)^2$ are perfect squares that touch the x-axis once.
* $D > 0$: two real roots. $D = 0$: one double root. $D < 0$: no real roots.
cap With k = ±6 the parabola just touches the x-axis. k = 3 misses it; k = 9 crosses it twice.

@73 A alg
ref §10B · Algebra essentials (systems)
Q The sum of two numbers is 30 and their difference is 8. What is their product?
A 209
B 221
C 189
D 240
!B 221 = 13 × 17. Those add to 30 but differ by 4, not 8.
!C 189 = 21 × 9. Those add to 30 but differ by 12.
!D 240 = 30 × 8: it multiplies the sum by the difference instead of finding the two numbers.
= Let the numbers be $x$ and $y$: $x + y = 30$ and $x - y = 8$.
= Add the equations: $2x = 38$, so $x = 19$. Then $y = 30 - 19 = 11$.
= Check: $19 + 11 = 30$ ✓ and $19 - 11 = 8$ ✓. Product: $19 \times 11 = 209$.
* Sum and difference: bigger = (sum + difference) ÷ 2; smaller = (sum − difference) ÷ 2.
cap The two lines cross at (19, 11).

@74 B alg
ref §10C · Quadratics and functions (composition)
Q If $f(x)=2x-3$ and $g(x)=x^2$, find $f(g(3))-g(f(3))$.
A 0
B 6
C 9
D 15
!A 0 assumes $f(g(3)) = g(f(3))$. The order of composition matters: here they're 15 and 9.
!C 9 is only $g(f(3))$, the second part. You still subtract it from $f(g(3)) = 15$.
!D 15 is only $f(g(3))$. You still subtract $g(f(3)) = 9$.
= Work from the inside out: $g(3) = 3^2 = 9$, then $f(9) = 2(9) - 3 = 15$.
= $f(3) = 2(3) - 3 = 3$, then $g(3) = 3^2 = 9$.
= $$f(g(3)) - g(f(3)) = 15 - 9 = 6$$
* For $f(g(x))$, do $g$ first, then $f$. Swapping the order changes the answer.
fig flow 3|g: square it|9|f: ×2 − 3|^15 ;; 3|f: ×2 − 3|3|g: square it|^9
cap Same input, opposite order, different outputs: 15 − 9 = 6.

@75 D alg
ref §10C · Quadratics and functions (inverses)
Q If $f(x)=\dfrac{3x+1}{2}$, what is $f^{-1}(5)$?
A 8
B 2
C $\frac73$
D 3
!A 8 is $f(5) = \frac{3(5)+1}{2}$. That's the function itself, not its inverse.
!B 2 doesn't work: $f(2) = \frac{7}{2} = 3.5$, not 5.
!C $\frac73$ doesn't work: $f\!\left(\frac73\right) = \frac{7 + 1}{2} = 4$, not 5. Undo the steps in reverse order: ×2, then −1, then ÷3.
= $f^{-1}(5)$ is the input that makes $f(x) = 5$.
= $$\frac{3x + 1}{2} = 5 \;\Rightarrow\; 3x + 1 = 10 \;\Rightarrow\; 3x = 9 \;\Rightarrow\; x = 3$$
= Check: $f(3) = \frac{9 + 1}{2} = 5$ ✓
* To find $f^{-1}(a)$, just solve $f(x) = a$. You don't need the whole inverse.
fig flow 3|× 3|9|+ 1|10|÷ 2|5 ;; 5|× 2|10|− 1|9|÷ 3|^3
cap The inverse undoes each step in reverse order.

@76 B alg
ref §10D · Exponentials and logarithms
Q Solve $\log_2(x+3)+\log_2(x-3)=4$.
A $x=-5$ and $x=5$
B $x=5$ only
C $x=8$
D $x=-5$ only
!A $x = -5$ is <b>extraneous</b>: it makes $x + 3 = -2$ and $x - 3 = -8$, and the log of a negative number is undefined.
!C $x = 8$ gives $\log_2 11 + \log_2 5 = \log_2 55$, not 4 (that needs $2^4 = 16$). Combine the logs first: $(x+3)(x-3) = 16$.
!D $x = -5$ is the one to <b>reject</b>: both log arguments become negative, so the logs don't exist.
= Product rule: $\log_2 a + \log_2 b = \log_2(ab)$. $$\log_2[(x+3)(x-3)] = 4$$
= Rewrite in exponential form: $(x+3)(x-3) = 2^4 = 16$.
= $$x^2 - 9 = 16 \;\Rightarrow\; x^2 = 25 \;\Rightarrow\; x = \pm 5$$
= Check the domain: we need $x + 3 > 0$ and $x - 3 > 0$, so $x > 3$. Only $x = 5$ survives: $\log_2 8 + \log_2 2 = 3 + 1 = 4$ ✓
* Always check log answers: every argument must be positive.
cap The left side exists only for x > 3, and it reaches 4 at x = 5.

@77 B alg
ref §10E · Sequences and series
Q The first term of a geometric sequence is 3 and the fourth term is 81. What is the sum of the first five terms?
A 243
B 363
C 364
D 729
!A 243 is the 5th <b>term</b> ($3 \cdot 3^4$), not the sum of the first five terms.
!C 364 is one too many: $1 + 3 + 9 + 27 + 81 + 243 = 364$ starts at 1, but this sequence starts at 3.
!D 729 is the 6th term ($3 \cdot 3^5$).
= Find the ratio: $a_4 = a_1 r^3$, so $3r^3 = 81 \Rightarrow r^3 = 27 \Rightarrow r = 3$.
= The terms are 3, 9, 27, 81, 243.
= $$S_5 = \frac{a_1(r^5 - 1)}{r - 1} = \frac{3(243 - 1)}{3 - 1} = \frac{3(242)}{2} = 363$$
= Check by adding: $3 + 9 + 27 + 81 + 243 = 363$ ✓
* $a_n = a_1 r^{n-1}$ and $S_n = \dfrac{a_1(r^n - 1)}{r - 1}$.
cap Each term is 3 times the last; together they total 363.

@78 D alg
ref §10E · Sequences and series
Q What is the sum of all positive multiples of 7 that are less than 100?
A 700
B 742
C 805
D 735
!A 700 is an estimate ($7 \times 100$), not the exact sum. Count the terms first.
!B 742 is 7 too much, as if one term were counted twice.
!C 805 is 70 too much. With 14 terms from 7 to 98, the sum is $\frac{14}{2}(7 + 98) = 735$.
= The multiples are $7, 14, 21, \dots, 98$ ($7 \times 14 = 98$, while $7 \times 15 = 105$ is too big). That's $n = 14$ terms.
= Arithmetic series: $$S_n = \frac{n}{2}(a_1 + a_n) = \frac{14}{2}(7 + 98) = 7 \times 105 = 735$$
= Or factor out 7: $7(1 + 2 + \cdots + 14) = 7 \times \frac{14 \times 15}{2} = 735$.
* Count the terms, then use $S = \frac{n}{2}(\text{first} + \text{last})$.
cap Pair the first with the last: 7 pairs, each adding to 105.

@79 A geo
ref §10F · Analytic geometry and conics
Q What are the center and radius of $x^2+y^2-6x+4y-12=0$?
A $(3,-2)$; 5
B $(-3,2)$; 5
C $(3,-2)$; 25
D $(-3,2)$; $\sqrt{12}$
!B The signs are flipped. $x^2 - 6x$ completes to $(x - 3)^2$, so $h = +3$; $y^2 + 4y$ completes to $(y + 2)^2$, so $k = -2$.
!C 25 is $r^2$. The radius is $\sqrt{25} = 5$.
!D Both parts are off: the center's signs are flipped, and $\sqrt{12}$ forgets to add the 9 and 4 from completing the square.
= Group the terms and move the constant: $(x^2 - 6x) + (y^2 + 4y) = 12$.
= Complete each square (half the coefficient, squared), adding 9 and 4 to both sides: $$(x^2 - 6x + 9) + (y^2 + 4y + 4) = 12 + 9 + 4$$
= $$(x - 3)^2 + (y + 2)^2 = 25$$
= Compare with $(x - h)^2 + (y - k)^2 = r^2$: center $(3, -2)$, radius $\sqrt{25} = 5$.
* In $(x - h)^2 + (y - k)^2 = r^2$, the center's signs are the <b>opposite</b> of the signs inside the brackets.
cap Center (3, −2), radius 5.

@80 D geo
ref §10F · Analytic geometry and conics
Q The graph of $4x^2-9y^2-16x+18y-29=0$ is
A a circle.
B a parabola.
C an ellipse.
D a hyperbola.
!A A circle needs $x^2$ and $y^2$ with the <b>same</b> coefficient and sign. Here they're $+4$ and $-9$.
!B A parabola has only <b>one</b> squared variable. This equation has both $x^2$ and $y^2$.
!C An ellipse has $x^2$ and $y^2$ with the <b>same sign</b> (different coefficients). Here the signs are opposite.
= Look only at the squared terms: $+4x^2$ and $-9y^2$. <b>Opposite signs</b> mean a hyperbola.
= Confirm by completing the square: $4(x^2 - 4x + 4) - 9(y^2 - 2y + 1) = 29 + 16 - 9 = 36$.
= $$4(x - 2)^2 - 9(y - 1)^2 = 36 \;\Rightarrow\; \frac{(x - 2)^2}{9} - \frac{(y - 1)^2}{4} = 1$$
* Squared terms: just one → parabola; same sign and coefficient → circle; same sign, different coefficients → ellipse; opposite signs → hyperbola.
cap A hyperbola centered at (2, 1), opening left and right between its asymptotes.

@81 C geo
ref §10G · Geometry (polygons)
Q Each interior angle of a regular polygon measures 144°. How many sides does it have?
A 8
B 9
C 10
D 12
!A A regular octagon's interior angle is $\frac{(8-2)180°}{8} = 135°$, not 144°.
!B A regular 9-gon's interior angle is $\frac{(9-2)180°}{9} = 140°$.
!D A regular 12-gon's interior angle is $\frac{(12-2)180°}{12} = 150°$.
= Use the exterior angle: interior + exterior = 180°, so the exterior angle is $180° - 144° = 36°$.
= The exterior angles of any polygon add up to <b>360°</b>.
= $$n = \frac{360°}{36°} = 10\ \text{sides}$$
= Check: $\frac{(10-2) \times 180°}{10} = 144°$ ✓
* Fast route: $n = \dfrac{360°}{180° - \text{interior angle}}$.
cap Walk around the decagon: turning 36° at each of the 10 corners adds up to one full 360° turn.

@82 C geo
ref §10G · Geometry (circles)
Q Chords $AB$ and $CD$ of a circle intersect at $E$. If $AE=4$, $EB=6$, and $CE=3$, find $ED$.
A 4.5
B 6
C 8
D 12
!A 4.5 is $\frac{6 \times 3}{4}$, from a wrongly set-up proportion. The rule multiplies the two pieces of <b>each chord</b>.
!B 6 just copies $EB$. The pieces must satisfy $AE \cdot EB = CE \cdot ED$.
!D 12 multiplies pieces from different chords ($AE \cdot CE = 4 \times 3$). Pair each chord's own two pieces.
= Intersecting chords theorem: the products of the two pieces of each chord are equal. $$AE \cdot EB = CE \cdot ED$$
= $$4 \times 6 = 3 \times ED \;\Rightarrow\; 24 = 3\,ED \;\Rightarrow\; ED = 8$$
* Intersecting chords: (piece × piece) of one chord = (piece × piece) of the other.
cap Drawn to scale: 4 × 6 = 24 and 3 × 8 = 24.

@83 A geo
ref §10G · Geometry (circles)
Q An inscribed angle intercepts an arc of 110°. What is the measure of the angle?
A 55°
B 110°
C 220°
D 70°
!B 110° is the <b>central</b> angle on that arc. An inscribed angle (vertex on the circle) is half of it.
!C 220° doubles instead of halving. An inscribed angle is always smaller than its arc.
!D 70° is $180° - 110°$, a supplement. That rule is for opposite angles of an inscribed quadrilateral.
= An <b>inscribed angle</b> has its vertex on the circle, and it equals <b>half</b> its intercepted arc.
= $$\text{angle} = \frac{110°}{2} = 55°$$
= (A central angle, with its vertex at the center, equals its arc: 110°.)
* Central angle = arc. Inscribed angle = ½ arc.
cap Same arc: the central angle is 110°, the inscribed angle is 55°.

@84 C geo
ref §10G · Geometry (similar figures)
Q Two similar triangles have corresponding sides in the ratio $2:3$. The smaller triangle's area is 24 cm². What is the larger triangle's area?
A 36 cm²
B 48 cm²
C 54 cm²
D 72 cm²
!A 36 scales the area by $\frac32$, the <b>side</b> ratio. Areas scale by the <b>square</b> of the side ratio.
!B 48 doubles the area. The area ratio is $\left(\frac32\right)^2 = \frac94$, not 2.
!D 72 triples the area. Use $\left(\frac32\right)^2 = 2.25$, not 3.
= If the sides scale by $k$, areas scale by $k^2$, because two dimensions stretch.
= $$k = \frac32 \;\Rightarrow\; \frac{A_\text{large}}{A_\text{small}} = \left(\frac32\right)^2 = \frac94$$
= $$A_\text{large} = 24 \times \frac94 = 54\ \text{cm}^2$$
* Side ratio $k$ → area ratio $k^2$ → volume ratio $k^3$.
cap Side ratio 2 : 3 → tile count 4 : 9. Each tile is 6 cm², so 9 tiles = 54 cm².

@85 B geo
ref §10G · Geometry (solids)
Q A cone and a cylinder have the same radius and the same height. The cylinder's volume is $81\pi$ cm³. What is the cone's volume?
A $9\pi$
B $27\pi$
C $40.5\pi$
D $243\pi$
!A $9\pi$ divides by 9. The cone is $\frac13$ of the cylinder, not $\frac19$.
!C $40.5\pi$ is half. A cone holds exactly one third of the matching cylinder.
!D $243\pi$ multiplies by 3. The cone is smaller than the cylinder, so divide.
= Cylinder: $V = \pi r^2 h$. Cone: $V = \frac13 \pi r^2 h$.
= With the same $r$ and $h$, the cone is exactly $\frac13$ of the cylinder.
= $$V_\text{cone} = \frac13 \times 81\pi = 27\pi\ \text{cm}^3$$
* Cone = ⅓ of a cylinder; pyramid = ⅓ of a prism (same base and height).
cap It takes exactly three cones of water to fill the matching cylinder.

@86 A geo
ref §10F · Analytic geometry (lines)
Q Which line passes through $(1,2)$ and is perpendicular to $y=2x+5$?
A $x+2y=5$
B $2x-y=0$
C $x-2y=-3$
D $2x+y=4$
!B $2x - y = 0$ is $y = 2x$. It passes through $(1,2)$, but its slope is 2, the <b>same</b> as the given line: that's parallel, not perpendicular.
!C $x - 2y = -3$ passes through $(1,2)$, but its slope is $+\frac12$. A perpendicular slope must be the <b>negative</b> reciprocal, $-\frac12$.
!D $2x + y = 4$ passes through $(1,2)$, but its slope is $-2$: negative, but not the reciprocal.
= The given slope is $m = 2$. A perpendicular line has slope $-\frac{1}{m} = -\frac12$ (the slopes multiply to $-1$).
= Point–slope form through $(1, 2)$: $$y - 2 = -\tfrac12(x - 1)$$
= Multiply by 2: $2y - 4 = -x + 1$, so $x + 2y = 5$.
= Check: $1 + 2(2) = 5$ ✓, and $y = -\frac12 x + \frac52$ has slope $-\frac12$ ✓
* Perpendicular slopes are negative reciprocals: $m_1 m_2 = -1$.
cap The lines meet at a right angle; their slopes, 2 and −½, multiply to −1.

@87 A trig
ref §10H · Trigonometry
Q If $\sin\theta=\frac35$ and $\theta$ is in Quadrant II, find $\cos\theta+\tan\theta$.
A $-\frac{31}{20}$
B $\frac{31}{20}$
C $-\frac1{20}$
D $\frac1{20}$
!B That's the Quadrant I answer. In Quadrant II, $x$ is negative, so cosine and tangent are both <b>negative</b>.
!C $-\frac{1}{20}$ is $-\frac45 + \frac34$: tangent was left positive. In Quadrant II, $\tan\theta = \frac{\sin\theta}{\cos\theta}$ is negative.
!D $\frac{1}{20}$ is $\frac45 - \frac34$: the signs are reversed. Both cos and tan are negative in Quadrant II.
= Draw the reference triangle: $\sin\theta = \frac{y}{r} = \frac35$, so $y = 3$, $r = 5$, and $x = -\sqrt{5^2 - 3^2} = -4$ (negative in Quadrant II).
= $$\cos\theta = \frac{x}{r} = -\frac45, \qquad \tan\theta = \frac{y}{x} = -\frac34$$
= $$\cos\theta + \tan\theta = -\frac{16}{20} - \frac{15}{20} = -\frac{31}{20}$$
* ASTC: All (I), Sine (II), Tangent (III), Cosine (IV) are positive. In Quadrant II only sine is positive.
cap In Quadrant II the point is (−4, 3): x is negative, so cos and tan are negative.

@88 B trig
ref §10H · Trigonometry (identities)
Q Simplify $(1+\tan^2\theta)\cos^2\theta$.
A $\sin^2\theta$
B $1$
C $\tan^2\theta$
D $\sec^2\theta$
!A $\sin^2\theta$ is only the $\tan^2\theta\cos^2\theta$ part. Don't forget the $1 \cdot \cos^2\theta$ part: $\cos^2\theta + \sin^2\theta = 1$.
!C $\tan^2\theta$ ignores the $\cos^2\theta$ factor. Multiplying by $\cos^2\theta$ turns $\tan^2\theta$ into $\sin^2\theta$.
!D $\sec^2\theta$ is only the bracket $1 + \tan^2\theta$. You still multiply by $\cos^2\theta$, and $\sec^2\theta\cos^2\theta = 1$.
= Pythagorean identity: $1 + \tan^2\theta = \sec^2\theta$.
= $$\sec^2\theta \cos^2\theta = \frac{1}{\cos^2\theta} \cdot \cos^2\theta = 1$$
= Another way, distributing: $\cos^2\theta + \tan^2\theta\cos^2\theta = \cos^2\theta + \sin^2\theta = 1$.
* Know all three: $\sin^2\theta + \cos^2\theta = 1$, $1 + \tan^2\theta = \sec^2\theta$, $1 + \cot^2\theta = \csc^2\theta$.

@89 D trig
ref §10H · Trigonometry (law of cosines)
Q Two sides of a triangle are 5 and 8, and the angle between them is 60°. How long is the third side?
A 6
B $\sqrt{89}$
C 9
D 7
!A 6 doesn't come from any formula here. Use the law of cosines with the included angle.
!B $\sqrt{89}$ is $\sqrt{5^2 + 8^2}$, the Pythagorean theorem, which works only when the angle is <b>90°</b>.
!C 9 would need $c^2 = 81$. Recheck: $25 + 64 - 2(5)(8)(0.5) = 89 - 40 = 49$.
= Two sides and the angle between them (SAS) → <b>law of cosines</b>: $$c^2 = a^2 + b^2 - 2ab\cos C$$
= $$c^2 = 5^2 + 8^2 - 2(5)(8)\cos 60° = 25 + 64 - 80\left(\tfrac12\right) = 49$$
= $$c = \sqrt{49} = 7$$
* SAS or SSS → law of cosines. ASA, AAS, or SSA → law of sines.
cap Drawn to scale: sides 5 and 8 at 60° are closed by a side of exactly 7.

@90 C trig
ref §10H · Trigonometry (angles of elevation)
Q From a point 30 m from the base of a tree on level ground, the angle of elevation of the treetop is 60°. How tall is the tree?
A $10\sqrt3$ m
B 15 m
C $30\sqrt3$ m
D 60 m
!A $10\sqrt3 = \frac{30}{\sqrt3}$ uses $\tan 30°$ instead of $\tan 60°$. At 60°, the tree is <b>taller</b> than the 30-m distance.
!B 15 m just halves the distance (as if using $\sin 30° = \frac12$). The right ratio is $\tan 60° = \frac{\text{height}}{\text{distance}}$.
!D 60 m is the <b>hypotenuse</b>, the line of sight to the treetop ($\frac{30}{\cos 60°}$), not the height.
= The height is <b>opposite</b> the 60° angle, and the 30 m is <b>adjacent</b>, so use tangent.
= $$\tan 60° = \frac{h}{30} \;\Rightarrow\; h = 30\tan 60° = 30\sqrt3 \approx 52\ \text{m}$$
* SOH-CAH-TOA: opposite and adjacent → tangent. $\tan 30° = \frac{1}{\sqrt3}$, $\tan 45° = 1$, $\tan 60° = \sqrt3$.
cap Opposite over adjacent: h = 30 tan 60° ≈ 52 m (drawn to scale).

@91 C stat
ref §10I · Statistics
Q The mean of five numbers is 18. When a sixth number is added, the mean becomes 20. What is the sixth number?
A 20
B 22
C 30
D 38
!A 20 is the new <b>mean</b>. Adding a 20 to numbers that average 18 would only nudge the mean up a little, not all the way to 20.
!B 22 is $20 + 2$, a guess from the 2-point rise. The new number has to lift all six numbers by 2.
!D 38 is $18 + 20$. Adding the two means isn't meaningful; work with totals.
= Turn means into totals: five numbers total $5 \times 18 = 90$.
= Six numbers total $6 \times 20 = 120$.
= The sixth number is the difference: $120 - 90 = 30$.
* Mean problems: total = mean × count. Compare totals, not means.
cap The total grows from 90 to 120, so the new number is 30.

@92 B stat
ref §10I · Statistics (spread)
Q Every score in a data set is increased by 5 points. Which statement is true?
A The mean and the standard deviation both increase by 5.
B The mean increases by 5; the standard deviation is unchanged.
C The mean is unchanged; the standard deviation increases by 5.
D Both the mean and the standard deviation are unchanged.
!A The standard deviation measures how spread out the scores are around the mean. If every score moves up 5, the gaps between them stay the same.
!C Backwards: shifting every score moves the <b>center</b>; the spread doesn't change.
!D The mean has to change: every score went up by 5, so their average goes up by 5.
= Adding a constant to every value <b>shifts</b> the whole data set.
= The center moves: new mean = old mean + 5.
= Each score's distance from the mean stays the same, so the spread (range, standard deviation) is <b>unchanged</b>.
* Add a constant: the mean shifts, the SD stays. Multiply by a constant: both scale.
cap Every dot slides right by 5; the spacing between the dots (the spread) doesn't change.

@93 A stat
ref §10I · Statistics (z-scores)
Q Ana scored 85 on a test with mean 75 and standard deviation 5. Ben scored 80 on a test with mean 70 and standard deviation 10. Who did better relative to the class?
A Ana, because her $z$-score is 2
B Ben, because his $z$-score is 1
C They did equally well, since both scored 10 above the mean.
D It cannot be determined.
!B Ben's $z$-score <b>is</b> 1, but a higher $z$ means a better relative standing, and Ana's is 2.
!C Both are 10 points above the mean, but 10 points counts for more on Ana's test, where scores are tightly packed (SD 5).
!D It can be determined: $z$-scores put both tests on the same scale.
= A $z$-score counts how many standard deviations a score is above the mean: $z = \dfrac{x - \mu}{\sigma}$.
= $$z_\text{Ana} = \frac{85 - 75}{5} = 2, \qquad z_\text{Ben} = \frac{80 - 70}{10} = 1$$
= Ana is 2 SDs above her class average; Ben is only 1. <b>Ana did better</b> relative to her class.
* Compare scores from different tests with z-scores, not raw points.
cap The same 10-point lead is 2 standard deviations for Ana but only 1 for Ben.

@94 B stat
ref §10J · Counting and probability
Q Two fair dice are rolled. What is the probability that the sum is 9?
A $\frac1{12}$
B $\frac19$
C $\frac16$
D $\frac5{36}$
!A $\frac{1}{12} = \frac{3}{36}$ counts only 3 ways. (3,6) and (6,3) are <b>different</b> outcomes, just like (4,5) and (5,4).
!C $\frac16 = \frac{6}{36}$ is the probability of a sum of <b>7</b>, the most likely sum.
!D $\frac{5}{36}$ is the probability of a sum of <b>8</b> (or 6).
= Two dice give $6 \times 6 = 36$ equally likely outcomes.
= Sum of 9: (3,6), (4,5), (5,4), (6,3), which is <b>4</b> outcomes.
= $$P = \frac{4}{36} = \frac19$$
* List ordered pairs; (a, b) and (b, a) count separately.
cap 4 of the 36 cells add up to 9.

@95 D stat
ref §10J · Counting and probability
Q In how many ways can a president, a vice president, and a secretary be chosen from 7 students?
A 35
B 21
C 343
D 210
!A 35 is $_7C_3$, picking a plain <b>committee</b> where order doesn't matter. These three posts are different, so order matters.
!B 21 is $_7C_2$: it picks only 2 people, without order.
!C 343 is $7^3$, which lets one student hold several posts. Once someone is chosen, they can't be picked again.
= The posts are different (president ≠ secretary), so <b>order matters</b>: this is a permutation.
= President: 7 choices. Vice president: 6 left. Secretary: 5 left.
= $$_7P_3 = 7 \times 6 \times 5 = 210$$
* Different roles → permutation. Same role (a committee) → combination: $_7C_3 = \frac{210}{3!} = 35$.
fig flow President<br><small>7 choices</small>|×|Vice president<br><small>6 left</small>|×|Secretary<br><small>5 left</small>|=|^210
cap Fill the posts one at a time: 7 × 6 × 5.

@96 C calc
ref §10K · Calculus (limits)
Q Evaluate $\displaystyle\lim_{x\to2}\frac{x^2-4}{x-2}$.
A 0
B 2
C 4
D does not exist
!A 0 plugs in only the top ($2^2 - 4 = 0$). The bottom is also 0, and $\frac00$ is undetermined, not 0.
!B 2 is where $x$ is heading, not the value the function approaches.
!D The function has a <b>hole</b> at $x = 2$, but a limit only cares about nearby values, and they approach 4 from both sides.
= Direct substitution gives $\frac{0}{0}$, an indeterminate form, so simplify first.
= Factor the top (difference of squares): $$\frac{x^2 - 4}{x - 2} = \frac{(x - 2)(x + 2)}{x - 2} = x + 2 \quad (x \ne 2)$$
= $$\lim_{x \to 2} (x + 2) = 4$$
* $\frac00$ means "simplify", not "zero" or "undefined". Factor and cancel.
cap The graph is the line y = x + 2 with a hole at (2, 4). From both sides, y heads to 4.

@97 A calc
ref §10K · Calculus (derivatives)
Q If $f(x)=3x^4-2x^2+7$, find $f'(1)$.
A 8
B 12
C 16
D 6
!B 12 is only the first term's derivative at 1 ($12x^3$). Don't forget $-4x$ from the $-2x^2$ term.
!C 16 adds instead of subtracting: $12 + 4$. The derivative of $-2x^2$ is $-4x$.
!D 6 doesn't follow from the power rule. $f'(x) = 12x^3 - 4x$, so $f'(1) = 12 - 4 = 8$.
= Power rule: $\frac{d}{dx}x^n = nx^{n-1}$, and the derivative of a constant is 0.
= $$f'(x) = 3(4x^3) - 2(2x) + 0 = 12x^3 - 4x$$
= $$f'(1) = 12(1)^3 - 4(1) = 8$$
* Bring the power down, then subtract one from it. Constants disappear.
cap f′(1) = 8 is the slope of the tangent line at x = 1.

@98 C calc
ref §10K · Calculus (extrema)
Q At what value of $x$ does $f(x)=x^3-3x$ have a local maximum?
A 1
B 0
C $-1$
D $\sqrt3$
!A At $x = 1$, $f''(1) = 6 > 0$: the curve is cupped upward, so that's a local <b>minimum</b> ($f(1) = -2$).
!B At $x = 0$ the graph just passes through the origin; $f'(0) = -3 \ne 0$, so it isn't a turning point.
!D $x = \sqrt3$ is a <b>root</b> of $f$ ($f(\sqrt3) = 0$), not a turning point.
= Critical points: $f'(x) = 3x^2 - 3 = 0 \;\Rightarrow\; x = \pm 1$.
= Second derivative: $f''(x) = 6x$.
= $f''(-1) = -6 < 0$: concave down, a <b>local maximum</b> at $x = -1$ (height $f(-1) = 2$).
= $f''(1) = 6 > 0$: concave up, a local minimum at $x = 1$.
* $f' = 0$ finds the turning points. $f'' < 0$ means a maximum (frown); $f'' > 0$ means a minimum (smile).
cap The curve peaks at x = −1 (height 2) and bottoms out at x = 1 (height −2).

@99 D calc
ref §10K · Calculus (optimization)
Q A farmer has 100 m of fencing to enclose a rectangular garden. What is the largest area he can enclose?
A 400 m²
B 500 m²
C 2,500 m²
D 625 m²
!A 400 m² is a 40 × 10 rectangle. It uses all 100 m, but it isn't the best shape.
!B 500 m² is possible (about 36.2 × 13.8), but it isn't the largest.
!C 2,500 m² is 50 × 50, which needs 200 m of fencing. The fence goes around all four sides: $2\ell + 2w = 100$.
= Let the sides be $x$ and $w$: $2x + 2w = 100$, so $w = 50 - x$.
= Area: $$A(x) = x(50 - x) = 50x - x^2$$
= Maximize: $A'(x) = 50 - 2x = 0 \;\Rightarrow\; x = 25$, so $w = 25$ (a square).
= $$A_\text{max} = 25 \times 25 = 625\ \text{m}^2$$
* For a fixed perimeter, a square encloses the most area.
cap The area peaks when the rectangle is a 25 × 25 square.

@100 D calc
ref §10K · Calculus (integrals)
Q Evaluate $\displaystyle\int_0^2(3x^2+2x)\,dx$.
A 8
B 10
C 16
D 12
!A 8 is only $\int_0^2 3x^2\,dx = 2^3$. Don't forget the $2x$ term, which adds $2^2 = 4$.
!B 10 integrates $2x$ as $x$ instead of $x^2$: $8 + 2$. The antiderivative of $2x$ is $x^2$.
!C 16 is $3(2)^2 + 2(2)$, the integrand's value at $x = 2$, not the area under the curve.
= Antiderivative (reverse power rule): $$\int (3x^2 + 2x)\,dx = x^3 + x^2 + C$$
= Evaluate from 0 to 2: $$\left[x^3 + x^2\right]_0^2 = (8 + 4) - (0 + 0) = 12$$
* $\int x^n\,dx = \frac{x^{n+1}}{n+1}$, then subtract: top limit minus bottom limit.
cap The shaded area under y = 3x² + 2x from 0 to 2 is exactly 12.
`;
