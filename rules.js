/*******************************************************************************
*the atomic unit of action: roll one d10 for each dot in a trait or combination*
*of traits then compare the numbers with the difficulty of the action. All dice*
*that exceed that number are "successes". Each 1 reduces the number of         *
*successes                                                                     *
*******************************************************************************/

/*******************************************************************************
*                              DEGREES OF SUCCESS                              *
*                                                                              *
*                       DICE ROLLED      CHANCE OF SUCCESS                     *
*                       X                Abyssmal/No Chance                    *
*                       1                Poor/Miniscle Chance                  *         
*                       2                Average/Middling Chance               *        
*                       3                Good/Decent Chance                    *        
*                       4                Exceptional/Good Chance               *        
*                       5                Superb/Rather Good Chance             *        
*                       6                Legendary/ Really Good Chance         *        
*******************************************************************************/

/*
DIFFICULTY      EXAMPLE

3               Trivial (hopping a creek)
4               Easy (cooking a meal)
5               Straightforward (changing the oil in your car)
6               Standard (punching someone in the face)
7               Challenging (comprehending a book by Crowley)
8               Difficult (playing all of '2112' on your guitar)
9               Extreme (sealing a million dollar deal with reluctant folks)

DEGREES OF SUCCESS
1               Marginal (getting a stranger to flirt with you)
2               Moderate (getting a stranger to give you their number)
3               Complete (getting a stranger to agree to a date)
4               Exceptional (getting a stranger to go on a date immediately)
5 or more       Phenomenal (going home with a stranger)


MODIFIERS
difficulty may be decreased or increased by up to 3 based on especially
favorable or unfavorable circumstances.

dice may also be added or taken away from the pool for especially favorable or
unfavorable internal circumstances

THRESHOLDS
A task may be so difficult as to require multiple successes. Instead of rolling
against an increased difficulty (as opposed to the default of 6) you add a die
for each diff beyond the default. For example, a diff 10 roll could also be
expressed as a diff 9 roll that requires 2 successes rather than just 1 to
succeed at all.

For every level of a threshold, that threshold removes one success rolled. A
threshold of one success removes one success. A threshold of two removes two
successes, etc.

A threshold rule can also a reflect a relatively easy task that requires a lot
of work ie. difficulty 3, 15 successes is an easy but involved task (such as
doing the dishes). You could accumulate the successes over multiple turns.

Threshold die removal occurs ***before*** successes are taken away by 1s for the
purposes of determining botches.

ROLL VALUES
1: -1 to successes, potential botch
2-5: failure
6-9: 1 success
10: success + 1 extra roll (with specialty) (DW: for characters and bosses -
always extra roll, 1s on this roll does not count against)

ACTION TYPES

SIMPLE ACTION
A straightforward task that requires a single success and takes a single turn

REFLEXIVE ACTION
An action that takes no real time or deliberate effort to perform. It is
essentially instant and automatic, like seeing a mountain in front of you as
opposed to solving Where's Waldo. It usually does not require a roll with the
most common exception being soak rolls.

MULTIPLE ACTIONS
To perform several actions in a single turn first figure out the dice pools you
would normally use for those actions, then use the lowest dice ppol among
them. 

Ex: one task gives you a pool of 6 and another gives you a pool of 4. You
therefore have 4 dice to work with. You can then divide those 4 dice however you
like between the two actions... 2 and 2, 3 and 1, etc.

EXTENDED ACTIONS
As mentioned in thresholds, you can require a certain number of rolls for a task
and accumulate those successes over multiple rolls spread out over multiple
periods of time. In a relaxed situation, any number of rolls can be done and
each one required just adds to the time needed. Where time is pressing, there
can be a limited number of rolls the character is allowed to try and hit the
threshold.

FAILING OR BOTCHING EXTENDED ACTIONS
A failure represents a failed roll. A botch generally represents a complete and
irrecoverable loss of progress. (using willpower is generally a good idea for
difficult or important extended rolls)

COMPLEMENTARY ROLLS (OPTIONAL)
A player can make a roll with one task to assist the performance of another. A
successful complementary roll reduces the difficulty of the other roll by 1 for
each success past the first, maximum -3.

RESISTED ACTIONS
When a character takes an action that is resisted by another character, they
both roll. The resister's successes subtract from the successes of the character
making an attempt. 

EX. Sneaky is trying to get past Guardy. Sneaky rolls dex + stealth vs Guardy's
per + alertness. If Sneaky gets 3 successes and Guardy gets 2, Sneaky gets 1
total success and wins. If they both get 3, Sneaky fails. The subtraction
happens after botch determination.

The difficulty is generally 6 but if the task is easier or harder for one of the
parties, the difficulties are adjusted accordingly. (higher difficulty to spot
someone at night or lower difficulty to be unheard in a loud room, etc.) 

EXTENDED AND RESISTED ACTIONS
Two characters engaged in an sustained and limited contest (a race, chess game,
wrestling match, etc). The initiating character must accumulate a certain number
of successes and the opposing player must reduce those successes. (DW: positive
and negative success thresholds can be used ie. at +5 successes, white wins
the chess game, -5 successes, black wins)

/*******************************ACTION SUMMARIES*******************************\
*   Action          Description         Example                                *
*   Reflexive       No Roll             spending willpower, soak, saying a word*
*                                                                              *
*   Simple          one roll, success   throwing a punch, looking for          *
*                   needed              something, impressing someone          *
*                                                                              *
*   Multiple        split lowest dice   pulling out a wrench and hitting       *
*                   pool between all    someone with it, driving and shooting  *
*                                                                              *
*   Extended        several rolls with  fixing a computer, conducting a ritual *
*                   a success threshold                                        *
*                                                                              *
*   Resisted        opposing players    grabbing an angry cat, impressing a    *
*                   roll against each   potential client                       *
*                   other                                                      *
*                                                                              *
*   Extended and    several opposed     bathing angry cat, arguing online      *
*   Resisted        rolls                                                      *
\******************************************************************************/

/*
TEAMWORK
Characters working together (mostly on extended actions) can combine their total
successes in order to meet a threshold. The success totals for each individual
are calculated, then pooled together. A botch by any individual generally ruins
the whole attempt.

FAILURE
0 total successes means the action failed, period. 

TRYING AGAIN
When trying a failed action again, generally add +1 to the difficulty for each
previous failure if the failure has any impact on future tries (social
interactions, frustration, time pressure, etc). This is not applied if the
player attempts a different tactic or approach to tackling the
challenge. (ex incorporating a mistake in a musical performance into an
improvisational flourish)

BOTCH
A botch is a catastrophic failure with game-altering repercussions. A roll of a
1 takes away the highest value success you've gotten on a roll. If you have more
1s than successes, you've botched. Like extra successes, extra 1s increase the
severity. A single botch may be an embarrassment or give a significant advantage
to an opponent. A triple botch may be fatal.

BOTCHES AND THRESHOLDS
A player may want to take their time with an especially difficult task, trading
in a high difficulty for an extended roll with a success threshold. This
tradeoff greatly reduces the odds of a catastrophic failure.

SUCCESS

AUTOMATIC SUCCESS
Use this for trivial tasks where a single success is all that's necessary and
there is no resistance

SPENDING WILLPOWER
A character may spend one point of willpower per turn to gain an automatic
success. This success cannot be canceled out by a one.




                            INITIATIVE AND MOVEMENT

ACTION TURNS 
    INITIATIVE
        Each character rolls initiative (one d10 + dex + wit). Characters then
        act highest to lowest. In the case of a tie, the character wtih the
        highest 'initiative rating' (dex + wit). If that's tied, favor the
        character with the highest wit. If that's tied, favor the character with
        the highest dex. (Optionally rolled once at the start of a sequence or
        once per turn)

        oWoD: Characters declare their actions lowest init to highest init, then
        actions resolve highest to lowest

        DW: ties vs baddies go to players except in the case of bosses. bosses
        win ties.

    ACTION
        Characters choose what they're going to do
        
    RESOLUTION
        The chosen actions resolve. roll the dice.


AUTOMATIC FEATS - no roll needed in normal circumstances
    getting to your feet
    normal movement
    normal speech, writing, or texting
    grabbing tools or weapons

                                    MOVEMENT

/*********************************MOVEMENT RATES*******************************\
*                                                                              *
*       Move        Distance Per Turn                                          *
*       Walk        7 yards                                                    *
*       Jog         12 + Dexterity Yards                                       *
*       Run         20 + (3 * Dexterity) Yards                                 *
*       Swim        8 + dex (unskilled) or 12 + dex (skilled) yards            *
*       Fly         10 to 20 yards                                             *
*       Climb       10 feet(3.3 yards) per success normally; 15-20 under ideal *
*                   conditions; 5 feet per success under poor conditions       *
*                                                                              *
\******************************************************************************/

/*
A character can move half of their normal running speed in a single turn and
still act without taking a penalty. Beyond that, they have to reduce their die
pool for that second action by one for every yard moved.

A character can move at full speed for roughly 10 turns for every point of
stamina they possess.

**health penalty** Characters who have reached the injured Health Level or lower
move at half their normal rate.

High intensity movement (jumping, swimming, sprinting) can cut the normal
movement duration by half. It can be further cut due to extreme circumstances
(swiming through heavy waves, dodging gunfire, outrunning a bear). To push
beyond limits, the character may roll Stamina or Willpower (whichever is
greater). A botch on this roll and the character trips, their body gives out, or
some other movement stopping effect. 

                                 DRAMATIC FEATS
/******************************************************************************\
* ACTION        TRAITS              DIFF    DESCRIPTION   

                                 Physical Feats
* Chase         dex + athletics     6       resisted * extended
  Climbing      dex + athletics     v *1    extended; 1 success = 5 ft
  Demolition    str + athletics     v       extended; 1 roll per strike
  Flow-Arts     dex + athletics     5-9     standard; 1 roll per performance
  Foraging      per + survival      7-9     extended; 1 roll = 2-5 hours
  Hunting       per + survival*2    7-9     extended; 1 roll = 1-3 hours
  Jumping       str                 3       standard; up 2'/success
                                            across 4'/success
  Lifting       str or will         v       see Feats of Strength chart
  Resisting     will or sta         +3 (v)  standard or resisted; see torture
  Sneaking      dex + stealth       *3      standard; see spotting sneak
  Swimming      sta + athletics     v       extended; 1 success = 10 minutes
                or swimming                 for speed see movement rates

                                Art and Science
 Computer       int + computers     v       standard or extended
 Craftwork      dex + crafts *4     v       extended; 1 roll = a day, week,
                                            month, depending on task
 Design         int + crafts *4     v       extended
 Evaluation     per + art or crafts v       extended
 Gamesmanship   per + subterfuge*5  v       resisted
 Hacking        int or wit +        *6      extended and resisted
                computer
 Invention      int + craft or      v       extended
                technology  
 Jury-Rigging   wit + tech          v       standard
 Performance    man + art*7         v       standard
 Programming    int + comptuer      *6      extended
 Repair         int + tech          v       extended
 Research       int + research*8    *9      extended
 Surfing  (web) per + computer      *9      extended
 Understanding  int + enigmas       v       standard
                or esoterica
                         Social Occasions And Intrigue
 Cryptography   int + knowledge*10  8       extended
 Deception*11   man + subterfuge    *12     resisted
 Eloquence*11   cha + expression    7       standard
 Facedowwn*11   cha + intimidation  8       resisted, target's willpower
 Fake-Out       man + streetwise    *12     standard
 Gossip*11      man + subterfuge    7       standard
 Impressing*11  cha + etiquette     v       standard
 Interpreting   per + empathy       v       standard
 Interogate*11  man + intimidation  6       resisted, target's willpower
 Poisoning      dex + streetwise    *12     standard
 Seduction*11   man + subterfuge or *12     resisted, target's willpower
                seduction
 Spotting Sneak per + stealth       8       resisted; see Sneaking
 Spotting       per + awareness     v       standard
 Supernatural
 Torture*11     man + torture       6       resisted; see Resisting

                                 Transportation
 Driving        dex + drive         *14     standard
 Evasion        dex + transport     *14     resisted*15
                method
 Flight         dex + flying or     *14     standard
                jetpack
 Piloting       dex + wit or        *14     standard
                pilot
 Pursuit        dex + transport     *14     resisted*16; see Evasion
                method
 Riding         dex + riding        *14     standard                
 Sailing        wit + crafts        *14     standard                
                (seamanship)

                                     Notes
#1  Typically 6 but may go up or down depending on circumstances
#2  Int can replace Per, to reflect cunning
#3  Watcher's per + awareness; could also be set by conditions - higher for light
    or open space, lower for darkness or cover
#4  Craft reflects the appropriate Trait; it could also be Art or Knowledge
#5  Or a knowledge trait related to the game. Could also be man + intimidation
    (to bluff); per + intuition (to read opponent); or int + enigmas (to work
    out puzzle).
#6  Depends upon system being hacked; for details se extended computer rules in 
    The Book of Secrets
#7  Man could be replaced by dex, sta, cha, or app, depending on the type of
    performance. Expression, intimidation, or seduction could be used to
    compensate for lack of skill
#8  Research can be replaced by streetwise (for dirt), etiquette (high society),
    computer (for computer searches), or other appropriate knowledge traits
    (esoterica, government, investigation, etc)
#9  Depends on how accessible the information is: 4 = widely available, 6 =
    normally accessible, 8 = hard to find, 9 + threshold = secret, classified,
    or assumed lost
#10 Knowledge reflects the trait necessary to encode or decode the
    information. Typically code traits include Esoterica (appropriate
    specialty), linguistics (appropriate language), science (appropriate
    discipline), or other fields. To crack a code without the appropriate
    information, you might use computer(to access databases) at a +3 diff and
    twice the normal successes needed; cracking the code when you do have the
    information speeds the process considerably. Creating or cracking complex
    codes is an extended activity, with each roll reflecting one day, week, or
    month, depending on the code's complexity. Many modern ciphers cannot be
    decoded without computers, and take days or weeks to unravel even then.
#11 Any social trait works; Cha reflects force of personality, man is obvious,
    and appearance lets you use beauty to your advantage.
#12 Difficulty is observer's wit + subterfuge.
#13 Torturer makes one roll per turn. Each scene of mental torture costs the
    victim one point of temporary willpower.
    Each scene of physical torture cost the victim one health level of bashing
    or lethal damage depending on method; intense torment inflicts two health
    levels per scene). Intense or lethal torture reduces tormenter's difficulty
    by -2. Botched roll gets false information, breaks target's mind, or
    possibly kills target.
#14 Difficulties depend upon travel conditions, from 3 or 4 in calm conditions
    to 9 + threshold under hazardous conditions.
#15 Target may use dex + stealth on foot(wit + stealth to duck behind
    cover). Pursuer's roll is resisted with per + subterfuge, and the pursuers must
    win roll in order to find target.
#16 Pursuer tries to equal or exceed target's successes; target tries to evade
    pursuer. Target begins with a head start between one and four successes. (One
    success = 2 yards on foot, 10 yards in cars, 50 yards in large
    vehicles). Each success by pursuer eliminates one sucess from the target. If
    pursuer matches or exceeds target's successes, pursuer catches up; if target
    more than doubles pursuer's successes, target escapes.

                               Feats of Strength

A character can automatically accomplish any feat of strength less than or equal
to their strength pool (ie someone with 3 dots in strength can automatically
bust down a wooden door). For any feat beyond that, they may roll willpower
(diff 9) to boost their effective strength. Each success on the willpower roll
acts as a +1 to the pool (ie someone with 3 dots in strength and 2 successes on
the willpower roll can smash open a metal fire door).

               Dice Pool    Feat                                Lift
               1            Crush a soda can                    40 lbs
               2            Break a chair                       100 lbs
               3            Bust down a wooden door             250 lbs
               4            Break a 2 x 4                       400 lbs
               5            Smash open a metal fire door        650 lbs
               6            Throw a motorcycle                  800 lbs
               7            Flip a small car                    900 lbs
               8            Snap a lead pipe                    1000 lbs
               9            Punch through a cement wall         1200 lbs
               10           Tear open a steel drum              1500 lbs
               11           Punch through 1" of sheet metal     2000 lbs
               12           Snap a streetlight post             3000 lbs
               13           Throw a sedan                       4000 lbs
               14           Toss an suv                         5000 lbs
               15           Hurl a pickup truck                 6000 lbs


                               HEALTH AND INJURY

                                 Health Levels

Health Levels   Dice Pool Ponalty*  Movement Penalty
(0) Uninjured        0              -You're fine
(1) Bruised          0              -Minor pain and swelling; banged up but
                                    otherwise fine
[2) Hurt             -1             -Cuts, bruises, aches, perhaps bleeding but
                                    no major impairment
(3) Injured          -1             -Minor, painful injuries limit the character
                                    to half their normal movement
(4) Wounded          -2             -Notable injuries handicap him; the character
                                    can't run but may still walk
(5) Mauled           -2             -Significant internal and external damage;
                                    character can hobble around(3 yards per
                                    turn) but not move normally
(6) Crippled         -5             -Catastrophic injuries; character can only
                                    crawl (1 yard per turn)
(7) Incapacitated    n/a            -Character is unconscious from pain and trauma
Dead                 n/a            -U ded, ho

                             *does not affect soak

                                 Healing Damage


                                    bashing
Health Level                Recovery Time*
Bruised to Wounded (1-4)    1 hour
Mauled (5)                  3 hours
Crippled (6)                6 hours
Incapacitated (7)           12 hours

                             lethal and aggravated
Health Level                Recovery Time*
Bruised (1)                 1 day
Hurt (2)                    3 days
Injured (3)                 1 week
Wounded (4)                 1 month
Mauled (5)                  2 months
Crippled (6)                3 months
Incapacitated (7)           5 months

                        * recovery times are cumulative

                                Types of Injury
Bashing Damage - blunt impact, short falls, psychic attacks, fistfight injuries,
knockout gas, minor illness, most types of drugs and other pains the average
person might walk away from. It is possible but not likely to die from bashing.

Bashing can be soaked with sta. When bashing takes a character to Incapacitated,
all subsequent bashing damage is lethal, starting from the top of the health
chart.

Lethal Damage - harm dealt by guns, blades, long falls, sharp impacts, eletrical
burns, puncture wounds, deadly poisons, fatal diseases, and other mortal
injuries. The average character cannot soak lethal damage.

Unlike bashing damage, lethal may cause a character's health to deteriorate
without mediacl care (int + medicine) to stabilize. 

At all levels below Hurt(2), untreated lethal wounds grow one level worse each
day. 

Aggravated Damage - fire, acid, virulent toxins, vampire fangs, radiation,
explosions, and similar physical atrocities.

Aggravated damage cannot be soaked by most physical beings. Some types of
protection (armor, magic, etc) can resist aggravated damage. Healing this damage
requires long term medical treatment or magic but in other regards is treated as
lethal damage. The character's health deteriorates like lethal and must be
stabilized to prevent further damage over time.

Psychic Trauma - mental attacks, torture, abominable tomes, emotional shocks and
other things that may cause psychosomatic pain. This is bashing damage but is
soaked by willpower rather than stamina. A character incapacitated by psychic
trauma may become mentially ill or gain a flaw that reflects their wonded mind.


                                 Healing Damage
The recovery times listed on the chart assume an injured character has rest and
basic medical attention. Under especially good conditions (skilled physicians,
an uninterrupted healing space, etc.), the listed time may be one or even two
categories better than the ones given on the chart.

Medical treatment (help from a character with medicine 2 or better) is essential
for bashing injuries of Wounded (4) or worse and for lethal/aggravated injuries
or Injured(3) or worse. Without that treatment, the character suffers
more-or-less permanent impairment until healed by magic or extensive medical
care.


                                     COMBAT
0. Initiative is determined 
1. Attack
2. Defense
3. Damage

                                    Attacks
                         all difficulties default to 6
guns                    dex + firearms
thrown weapons          dex + athletics
hand-heald weapons      dex + melee
hand-to-hand            dex + brawl or dex + martial arts
magic                   arete/enlightenment. If it requires a physical component
                        (a punch, etc) roll the appropriate attack 

                                    Defense
action                  die pool
dodge                   dex + athletics or dex + acrobatics
block                   dex + brawl
parry                   dex + melee
countermagick           <++>

You can declare a defensive maneuver at any point in your turn so long as you
have an action left to perform. If you have already declared a different action
for the turn, you may make a willpower roll (diff 6) or spend a willpower point
to change your character's mind. 

You make attack and defend in the same turn following the dice pool rules for
multiple actions.

Dodging:
    dex + athletics. The difficulty depends on the nature of the attack and the
    distance the dodging character wants to cover during the dodge. Dodging a
    hand-to-hand strike: diff 5. Dodging firearms at close range: diff 9 or
    10. Each success subtracts one success from the attacker's roll. 

Blocking:
    dex + brawl to use a body part to deflect a blow. Difficulty typically
    ranges between 6 (for a fist) and 8 (for a table). Each success scored by
    the defender removes a success from the attacker's attempt.

    Normally, only hand-to-hand attacks can be blocked. A character with martial
    arts can attempt to block spears, other thrown ojects, or arrows with a dex
    + martial arts roll (diff 8). Normal humans cannot block lethal or
    aggravated damage attacks unless they are wearing armor,

Parrying (and rebound attacks):
    A parry works the same as a block except you are using a wepaon to block and
    incoming attack.

    If an attacker uses a brawl attack that gets defended by a parry (like a
    punch deflected with a knife) then the attacker probably hurts themself. The
    defender rolls a "rebound attack"  if the successes rolled to parry the
    attack outnumber the successse the opponent rolled when attacking them.

    A rebound attack uses a typical dex + melee roll using the full dice
    pool. If successful, it scores the usual amount of damage + one success for
    each success that outnumbered the attackers roll. (A parry that scores two
    successes more than necessary, for example, would add two more successes to
    that rebound atack.) 

"Desperate" or Full Defense:
    The character dedicates all of their efforts to defending themselves. They
    are unable to do anything else in the turn. Roll the appropriate defensive
    roll (dodge, block, etc) with your full dice pool against the first
    attack. Then subtract one die from the pool for each subsequent attack that
    turn.

                                     Damage

Soaking:
Roll the character's sta against a difficulty determined by the damage. Bashing
can be soaked by any character (diff 6). Lethal can't be soaked by normal humans
but may be soaked by different creatures at 6 or higher diff. Aggravated cannot
be soaked by humans and most other creatures. Soaking it usually requires
paranormal protection or heavy-duty armor.

Each success on a soak roll reduces the damage by one health level. If the soake
eliminates all of the successes scored against a character, they've gotten hit
but not hurt.

Calculating Damage:
The most dangerous type goes on the top of the chart. Take Bob. Bob gets punched
in the face and takes 2 bashing damage after his soak.

(0) Uninjured       [/]
(1) Bruised         [/]
[2) Hurt            [ ]
(3) Injured         [ ]
(4) Wounded         [ ]
(5) Mauled          [ ]
(6) Crippled        [ ]
(7) Incapacitated   [ ]

Bob then gets stabbed with a pencil nad takes a total af 1 lethal damage

(0) Uninjured       [X]
(1) Bruised         [/]
[2) Hurt            [/]
(3) Injured         [ ]
(4) Wounded         [ ]
(5) Mauled          [ ]
(6) Crippled        [ ]
(7) Incapacitated   [ ]

Then Bob gets lit on fire and takes 3 aggravated damage. Poor Bob.

(0) Uninjured       [*]
(1) Bruised         [*]
[2) Hurt            [*]
(3) Injured         [X]
(4) Wounded         [/]
(5) Mauled          [/]
(6) Crippled        [ ]
(7) Incapacitated   [ ]


                        Combat Tactics and Circumstances

Ambush:
Attacker rolls dex + stealth vs target's per + alertness
If the attacker wins, they get one attack roll against the opponent before
initiave rolls are made. Add one die to the pool for each success beyond the
minimum. 

On a tie, attacker goes first but the defender can take a defensive maneuver

If the defentder wins, roll normal initiative.

Armor and Shields:
Armor adds to the wearer's soak pool and allows them to soak lethal damage, as
well as certain types of aggravated damage. Lgiht armor is not encumbering but
heavier armor may inflict a penalty on the wearer's dex-based dice
pool. Different types of armor take differing amounts of time to put on.

Shields make the wearer harder to hit. An opponent facing your shield in
hand-to-hand or melee combat adds 1 or 2 to the difficulty to hit you, depending
on the size of the shield in question. When used to defend against projectiles,
the shield acts as armor, reducing a blow by one success for every level in the
shield's rating.

If a shield is being used to actively defend, it requires a dex + melee roll as
a dedicated blocking/parrying action.

Blinded, Knocked Down, Immobilized, or Stunned:
Blinding: blinded characters cannot dodge, parry, or block incoming
attacks. They also add 2 difficulty of all visually dependent actions until they
are able to see again
Knockdown: The character must take an action to get back up. If they can't do
so, they can be considered temporarily immobilized until they get back on their
feet.
Immobilization:
When a character gets held down, paralyzed, or otherwise rendered unable to
move, any other character who attacks him redcuces their difficulty by 2 if the
target can still move around a bit, or can hit them automatically if the target
is fully immobilized
Stunning:
If -- after the soak roll -- a character suffers health-level damage that
exceeds their stamina rating, they're stunned until the end of the following
turn. The stunned character can't make any significant actions. Attack rolls
against them during that time reduce their difficulty by 2.
