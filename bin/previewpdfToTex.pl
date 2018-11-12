s/SU(2)L/\\( SU(2)_L \\)/;
s/×/\\times/g;
s/¿/``/g;
s/¿/''/g;
s/¿/\\sim/g;
s/¿/\\ll/g;
 1 GeV).
This is, thus, an example of an ¿approximate symmetry¿.
Closer to the theory you will study below, the scalar model with SU(2)L×SU(2)R symmetry, is really the same as the Higgs sector in the Standard Model, in the limit when the electromagnetic and weak interactions are turned off.
SU(2)L ×SU(2)R becomes a symmetry in this limit.
It is only an approximate symmetry, as the electromagnetic and weak couplings (which explicitly break it) are dimensionless numbers smaller then unity.
Finally, to end the preaching preamble, the notion of approximate symmetries is not new and you have, for sure, been exposed to its usefulness when studying the hydrogen atom spectrum in quantum mechanics.
\makesubproblem{}{qft:problemSet2:2a}
The Lagrangian you will study is that of two complex scalar fields, assembled into a column ¿ = (¿1,¿2)T (the T is here so I do not have to go through the trouble to write a column instead of a row).
It is given by:
L = ¿¿¿¿¿¿¿ ¿ m2¿¿¿ ¿ ¿(¿¿¿)2 . (1)
Show that (1) is invariant under an SU(2)L global symmetry transformation ¿ ¿ UL¿, where UL¿ UL = 1 is a 2 × 2 unitary matrix of unit determinant.
In addition, the Lagrangian has a U(1) symmetry, not part of SU(2)L, acting as ¿ ¿ ei¿¿.
Find the currents and conserved charges under these symmetries.
Hint: recall that an infinitesimal SU(2)L transformation can be written as UL ¿ ¿0 + i¿a ¿a , where 2
¿0 is the unit 2 × 2 matrix, ¿a, a = 1, 2, 3 are the Pauli matrices, and ¿a are the three parameters of infinitesimal SU(2)L transformations.


\makesubproblem{}{qft:problemSet2:2b}
Show that the charge operators, Q¿La, a = 1,2,3, conserved due to SU(2)L invariance, obey the angular momentum algebra, i.e., [Q¿L1 , Q¿L2 ] = iQ¿L3 (plus cyclic permutations).

\makesubproblem{}{qft:problemSet2:2c}
The Lagrangian (1) has, however, a larger symmetry than simply the above SU(2)L.
To begin seeing this, instead of using ¿ = (¿1,¿2)T introduce the real and imaginary parts of ¿1,2.
Use ¿1 = ¿1 +i¿2,¿2 = ¿3 +i¿4, and introducing ¿ = (¿1,¿2,¿3,¿4)T, show that (1) can be written as:
L=a¿¿¿T¿¿¿¿bm2¿T¿¿c¿(¿T¿)2 , (2)
on the way determining the (pure numbers) a, b, c.
The Lagrangian (2) has, clearly, an O(4) symmetry, i.e., is invariant under ¿ ¿ O¿, where O is a 4 × 4 orthogonal matrix, OT O = 1.
Is there a continuous U(1) allowed in this case?
Comment: I will spare you finding the currents for SO(4) (SO(4) matrices are the restriction of O(4) matrices to the ones with unit determinant).
What you will do next, instead, is to use the equivalence of Lie algebras SO(4) ¿ SU(2) × SU(2), which will come about by another change of variables (see below).
Notice also that, as it comes, SO(4) happens to be the Euclidean version of SO(1,3).

\makesubproblem{}{qft:problemSet2:2d}
To expose the SU(2)L ×SU(2)R symmetry of (1), now use the following change of variables.
Consider, instead of ¿ in (1) the 2 × 2 matrix H made up by components of ¿ as follows:
 1 1¿¿¿ ¿¿
H¿¿ (i¿¿¿,¿)=¿ 2 1 . (3)
2 2 2 ¿¿¿1 ¿2
Show that under SU(2) transformations, H ¿ 1 (i¿ (U ¿)¿, U ¿) = 1 (U i¿ ¿¿, U ¿) =
    L ¿2 2 L L ¿2 L 2 L
    ULH.
Hint: the tricky part is to show that i¿2(UL¿)¿ = i¿2UL¿¿¿ = ULi¿2¿¿.
What you need to show, then, is that ¿2UL¿2 = UL¿ (this fact will be very useful in our future studies of spinors, so make sure you understand it).

\makesubproblem{}{qft:problemSet2:2e}
Using the change of variables (3), show that
¿ 1 ¿ |¿1|2 + |¿2|2 0 ¿
, (4)
L=Tr¿¿¿H¿¿¿H¿¿m2TrH¿H¿¿¿TrH¿H¿2 , (5) where Tr denotes the matrix trace.
Show that now (5) has SU(2)L × SU(2)R symmetry,
acting on H as
H¿ULHUR¿ , (6)
H H = 2 0 |¿1|2 + |¿2|2 and, hence, that (1) can be written as:
 where the action of UR¿ on the right is pure convention (we could have taken UR instead).
UL and UR are two sets of independent SU(2) transformations.
The L and R (left and right) names are self-evident in the way (6) is written.
Show that under SU(2)L ×SU(2)R, we have ¿H = i¿L ¿a H ¿ i¿RH ¿b .
  a2b2
Hint: clearly, the only thing you need to show is SU(2)R invariance, as SU(2)L was already shown.

\makesubproblem{}{qft:problemSet2:2f}
Show that the left and right SU(2) conserved currents can be written as
j¿,a = i tr (¿¿H¿¿aH ¿ H¿¿a¿¿H) and j¿,b = i tr (¿¿H¿bH¿ ¿ H¿b¿¿H¿) , (7)
  L2 R2
and that the corresponding generators Q¿L,R obey the commutation relations of two commut-
a
ing angular momentum algebras.
Hint: notice that both currents are Hermitean and that the left is obtained from the right by inter-
changing H with H¿.

} % makeproblem

\makeanswer{qft:problemSet2:2}{
\makeSubAnswer{}{qft:problemSet2:2a}
TODO.
\makeSubAnswer{}{qft:problemSet2:2b}
TODO.
\makeSubAnswer{}{qft:problemSet2:2c}
TODO.
\makeSubAnswer{}{qft:problemSet2:2d}
TODO.
\makeSubAnswer{}{qft:problemSet2:2e}
TODO.
\makeSubAnswer{}{qft:problemSet2:2f}
TODO.
}
