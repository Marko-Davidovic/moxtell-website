// Three Journal article pages. Each HTML page (journal-*.html) sets
// window.JOURNAL_SLUG before this file loads, and the bottom dispatcher
// picks the right component.

function JournalShell({ tag, meta, title, kicker, children }) {
  const ref = useReveal();
  return (
    <>
      <Nav />
      <main className="about-page" ref={ref}>
        <section className="about-hero about-story-hero wrap">
          <a className="journal-back reveal" href="index.html#journal">← All articles</a>
          <div className="eyebrow reveal" style={{ marginTop: 20 }}>◦ {tag} · {meta.join(" · ")}</div>
          <h1 className="h-display reveal reveal-delay-1" style={{ marginTop: 16 }}>
            {title}
          </h1>
          {kicker && (
            <p className="reveal reveal-delay-2" style={{
              marginTop: 18,
              color: "var(--muted)",
              fontSize: "clamp(18px, 1.6vw, 22px)",
              maxWidth: 740,
              marginLeft: "auto",
              marginRight: "auto",
              lineHeight: 1.5,
            }}>
              {kicker}
            </p>
          )}
        </section>

        <section className="about-story wrap reveal">
          <article className="about-story-card">
            {children}
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}

function ArticleReceptionist() {
  return (
    <JournalShell
      tag="Field notes"
      meta={["8 min read", "Apr 2026"]}
      title="What a great receptionist does that AI finally can, too."
      kicker="Eight micro-behaviors we studied across forty clinics — and how we taught them to a voice model."
    >
      <p className="about-story-lede">
        We spent six months listening in on veterinary front desks. Not the polished kind of "best-practice"
        listening where you nod along to a training video — the actual kind, headphones on, sitting next to
        a real receptionist at a real clinic, with a notepad on your lap. Forty clinics. Roughly 1,200 hours
        of phone calls.
      </p>
      <p>
        By the end of it we had a list. The list was shorter than we expected. The best receptionists at the
        best clinics all did the same eight small things — tiny things, the kind that don't make it into
        onboarding documents because nobody thinks to write them down. Put them together, and that's the
        difference between a call that feels warm and a call that feels like a transaction.
      </p>
      <p>
        For a year we tried to teach those eight behaviors to a voice model. Here's what we learned.
      </p>

      <div className="about-story-separator" />

      <p><b>1. They say the pet's name. Twice.</b></p>
      <p>
        "Hi, this is Royal Vet — is this about Mona?" Then, two beats later, "Okay, and what's going on
        with Mona today?" The owner relaxes immediately. The clinic knows their pet. A model can do this.
        You just have to tell it to. We did.
      </p>

      <p><b>2. They never guess the breed.</b></p>
      <p>
        The mediocre ones say "oh, a doodle, those guys are sweet." The good ones say "Pomeranian — got it."
        Language models love to guess. We taught ours not to.
      </p>

      <p><b>3. They confirm before scheduling.</b></p>
      <p>
        "Just so I have this right — you'd like Mona's dental cleaning tomorrow, Saturday, at 2 PM. Is that
        right?" Three seconds. Costs nothing. Stops eighty percent of double-booked dramas. Now standard
        in every Moxtell flow.
      </p>

      <p><b>4. They offer two specific times, never "what works for you?"</b></p>
      <p>
        "What works for you" forces the caller to do work. The good receptionists say "I have 1:30, 2:00,
        or 2:30. Any of those?" Faster. Friendlier. Easier to say yes to. Decision fatigue is real, even
        on the phone.
      </p>

      <p><b>5. They read tone, not just words.</b></p>
      <p>
        When the owner's voice cracks a little — when the dog is older, when the symptoms sound bad — the
        good receptionist slows down. Asks how the owner is doing. Offers to pass the call along. We trained
        Moxtell to listen for tightness, fast speech, audible sighs. When it hears them, it slows down too.
      </p>

      <p><b>6. They know when to hand off.</b></p>
      <p>
        A great receptionist knows the line: routine question = me, urgent or sensitive = a person.
        They don't hesitate. They don't apologize. They just say "let me get someone for you." The model
        needs the same calm handoff instinct. We taught it the line.
      </p>

      <p><b>7. They repeat the important detail back.</b></p>
      <p>
        "Mona, Pomeranian, 2:00 PM with Dr. Arencibia. You'll get a text confirmation." Owners trust what
        they've heard read back to them. The model now does this on every booking.
      </p>

      <p><b>8. They close the call without leaving anything dangling.</b></p>
      <p>
        "Anything else I can help you with today?" Then: "Have a wonderful day. We'll see you and Mona
        tomorrow." It sounds obvious. Half the calls we recorded ended mid-sentence with a flat "okay,
        bye." The good ones felt like a goodbye. Now ours does too.
      </p>

      <div className="about-story-separator" />

      <p>
        None of these are about technology. They're about respect, pacing, and the small linguistic shapes
        that make a stranger on the phone feel like they were heard. For a long time, the gap between
        "what a great receptionist does" and "what software can do" felt like a canyon. It's getting smaller
        every quarter.
      </p>
      <p>
        If your clinic does these eight things already, you don't need us. If you'd like every call to land
        that way, you might.
      </p>
    </JournalShell>
  );
}

function ArticleSub400() {
  return (
    <JournalShell
      tag="Product"
      meta={["12 min read", "Mar 2026"]}
      title="Sub-400ms voice: the engineering story."
      kicker="Latency is the whole game in a conversation. Here's the stack we rebuilt to get our median voice response under 400 milliseconds."
    >
      <p className="about-story-lede">
        There's a number that comes up in every conversation about voice AI: 500 milliseconds. It's the
        rough threshold at which a conversational response starts to feel human. Above 500ms, the listener
        notices. Above 800ms, they think the line went dead. Above a full second, they hang up.
      </p>
      <p>
        We spent the last eighteen months getting our voice pipeline down to a median of 380ms.
        Here's what was in the way, and what we did about it.
      </p>

      <div className="about-story-separator" />

      <p><b>Where the time goes</b></p>
      <p>A voice AI conversation is four sequential pieces:</p>
      <p>
        <b>1. Speech-to-text (STT)</b> — the caller's audio is transcribed.<br/>
        <b>2. LLM</b> — the transcript is turned into a reply.<br/>
        <b>3. Text-to-speech (TTS)</b> — the reply is turned into audio.<br/>
        <b>4. Audio out</b> — the audio is streamed back to the phone.
      </p>
      <p>
        The naive version of this pipeline waits for each step to finish before starting the next. Median
        time? Around 2.4 seconds. That's not voice AI. That's a walkie-talkie.
      </p>

      <p><b>Stream everything</b></p>
      <p>
        The first big unlock was treating every step as a stream, not a request. STT emits partial
        transcripts as the caller talks. The LLM gets fed those partials and starts thinking before the
        caller is done speaking. TTS receives the LLM's tokens as they generate and begins synthesizing
        audio after the first sentence boundary. By the time the LLM has finished its full reply, the first
        few seconds of audio are already on the phone.
      </p>
      <p>That alone cut median latency by sixty percent.</p>

      <p><b>Endpoint prediction</b></p>
      <p>
        The hardest call to make in a voice conversation is "did they stop talking?" Wait too long, and
        the AI feels slow. Cut in too early, and you interrupt. We trained a small endpoint-prediction
        model that looks at the last 800ms of audio — pitch contour, breath length, syllable cadence —
        and predicts whether the caller is done. It's faster than waiting for silence and more accurate
        than any timeout we tried.
      </p>

      <p><b>Pre-warmed model connections</b></p>
      <p>
        Cold starts are death. Every time the LLM had to "wake up" for the first token of a new turn,
        we lost 200-400ms. Now every inference target — the LLM, the TTS voice, the function-call router
        — is kept warm with a phantom heartbeat for the duration of the call. Median first-token time
        dropped from 280ms to 38ms.
      </p>

      <p><b>Regional inference</b></p>
      <p>
        We moved every step of the pipeline into the same region as the caller's SIP gateway. For a call
        coming in from a clinic in Miami, the STT, LLM, and TTS all run in us-east-1. Network round-trips
        between the steps went from about 80ms to about 6ms.
      </p>

      <p><b>Small TTS chunks</b></p>
      <p>
        Most TTS models synthesize in larger blocks for fidelity. We tuned ours to emit smaller chunks —
        about 240ms of audio at a time — so the first audio reaches the phone as fast as possible.
        There's a quality tradeoff at very small sizes. 240ms turned out to be the sweet spot for our voice.
      </p>

      <div className="about-story-separator" />

      <p><b>Where we ended up</b></p>
      <div style={{ overflowX: "auto", margin: "12px 0 18px" }}>
        <table className="journal-table">
          <thead>
            <tr><th>Step</th><th>Before</th><th>After</th></tr>
          </thead>
          <tbody>
            <tr><td>STT first partial</td><td>320 ms</td><td>90 ms</td></tr>
            <tr><td>LLM first token</td><td>280 ms</td><td>38 ms</td></tr>
            <tr><td>TTS first audio</td><td>410 ms</td><td>165 ms</td></tr>
            <tr><td>Network</td><td>120 ms</td><td>14 ms</td></tr>
            <tr><td><b>End-to-end median</b></td><td><b>2,420 ms</b></td><td><b>380 ms</b></td></tr>
          </tbody>
        </table>
      </div>

      <p><b>Why this matters</b></p>
      <p>
        380ms isn't a trophy. It's the point where the caller stops noticing that the receptionist is
        software. They just have a conversation. They ask their question, they get an answer, they hang
        up satisfied. Nobody hangs up because the AI was slow.
      </p>
      <p>
        That's the whole game. Everything else — the prompt, the function calls, the booking flow — only
        matters if the conversation feels alive. The latency budget is the budget you have for the agent
        to feel real.
      </p>
      <p>We're still chipping away. Next milestone: a steady median under 300ms.</p>
    </JournalShell>
  );
}

function ArticlePrairiePaws() {
  return (
    <JournalShell
      tag="Case study"
      meta={["6 min read", "Mar 2026"]}
      title="Prairie Paws answered 7,400 calls in a quarter."
      kicker="How a six-clinic group went from a 19% missed-call rate to nearly zero — without hiring a single new front-desk staffer."
    >
      <p className="about-story-lede">
        Prairie Paws Veterinary is a six-clinic group based out of Minneapolis, with locations across
        Minnesota and western Wisconsin. They've been around since 2009. Twenty-eight staff. Mostly
        small-animal general practice, with some specialty work at the larger St. Paul location.
        Like a lot of growing groups, they had a phone problem.
      </p>

      <div className="about-story-separator" />

      <p><b>The baseline</b></p>
      <p>Before Moxtell, Prairie Paws' answering metrics for Q3 2025 looked like this:</p>
      <p>
        — 19% missed-call rate across all six clinics<br/>
        — 41% of missed calls converted to voicemail<br/>
        — 8.4 hours per week per location spent on callback work<br/>
        — 4.2% client churn rate, with "couldn't get through" cited as the second-most-common reason
      </p>
      <p>
        Their ops manager, Kelsey Reinhardt, put it plainly the first time we talked: "We weren't losing
        because we were bad. We were losing because the phone wouldn't stop."
      </p>

      <p><b>The deployment</b></p>
      <p>
        We started with their flagship St. Paul location in October 2025. Moxtell took over all
        overflow calls — anything that didn't get picked up within three rings rolled to our agent
        instead of voicemail. The agent handled appointment requests, refill inquiries, hours and
        directions questions, and routed anything sensitive or urgent to a live staffer.
      </p>
      <p>Two weeks in, we rolled it out to the other five locations.</p>

      <p><b>What changed in 90 days</b></p>
      <p>
        Between November 2025 and the end of January 2026, Prairie Paws answered <b>7,412 calls</b> through
        Moxtell that would previously have hit voicemail. That includes both pure overflow and
        after-hours. Of those:
      </p>
      <p>
        — <b>63% booked an appointment</b> (4,690 new visits scheduled)<br/>
        — <b>22% were refill or hours questions</b> (handled end-to-end, no callback needed)<br/>
        — <b>9% routed to live staff</b> (urgent triage, sensitive conversations)<br/>
        — <b>6% were marketing or wrong numbers</b> (politely closed, never reached staff)
      </p>
      <p>
        The missed-call rate across all six clinics dropped from 19% to <b>near zero</b> within six weeks.
      </p>

      <div className="about-story-separator" />

      <p><b>Kelsey's words</b></p>
      <p style={{
        borderLeft: "3px solid var(--accent-ink)",
        paddingLeft: 18,
        fontStyle: "italic",
        color: "var(--ink)",
      }}>
        "The thing I didn't expect is how much calmer our front desks feel. Our staff aren't sprinting
        between the phone and the lobby anymore. They have time to actually look up at the person
        they're checking in. That was the win I wasn't measuring for."
      </p>

      <p><b>Revenue impact</b></p>
      <p>
        We don't usually share dollar numbers in case studies, but Prairie Paws was generous enough to
        let us share theirs. Of the 4,690 visits booked through Moxtell in Q4, 87% showed up. Average
        per-visit revenue at Prairie Paws is roughly $138. Estimated additional revenue in 90 days:
        <b> about $562,000</b>. No new hires were made during this period.
      </p>

      <p><b>What's next</b></p>
      <p>
        In Q1 2026 Prairie Paws is rolling out Moxtell as the primary answering line at their two
        highest-volume locations, not just the overflow. They're also testing it as their after-hours
        triage line.
      </p>
      <p>
        If you're running a clinic group and the phone is eating your team, we'd be glad to walk you
        through what we did with Kelsey.
      </p>
    </JournalShell>
  );
}

function ArticleQuietDesk() {
  return (
    <JournalShell
      tag="Industry"
      meta={["7 min read", "Apr 2026"]}
      title="The quieter front desk: how AI voice is changing veterinary clinics."
      kicker="More focus on people in the lobby, fewer interruptions, happier clients — what changes when the phone stops eating the day."
    >
      <p className="about-story-lede">
        For as long as the modern veterinary clinic has existed, the front desk has been a juggling act.
        A receptionist who could keep three conversations alive at once — one in the lobby, one on the
        phone, one on hold — was considered a great hire. The skill the industry needed most was,
        essentially, controlled chaos.
      </p>
      <p>That is quietly changing.</p>

      <div className="about-story-separator" />

      <p><b>The way the day used to feel.</b></p>
      <p>
        Walk into a busy small-animal clinic at 8:15 AM and you would see the same picture in every state:
        a receptionist with a phone wedged between her ear and her shoulder, scanning a printed schedule,
        half-greeting the family who just walked in, trying to remember which line is on hold. The phone
        is the loudest thing in the room. It is also the most relentless.
      </p>
      <p>
        Most clinic owners we have talked to do not describe their front desk as understaffed. They
        describe it as over-interrupted. The work is doable. The interruptions are not.
      </p>

      <p><b>What changes when the phone is handled in the background.</b></p>
      <p>
        When a voice agent picks up the routine calls — the booking requests, the refill questions,
        "what time do you close," "I just have a quick question" — three things happen at once.
      </p>
      <p>
        First, the lobby gets quieter. The receptionist is not pulling away mid-sentence to grab the
        third line. The family in front of her gets a full conversation.
      </p>
      <p>
        Second, the phone stops feeling like a threat. Staff do not brace every time it rings. The team
        can be in a meeting, in the back checking on a patient, or simply present — and the phone is
        still being answered.
      </p>
      <p>
        Third, the calls themselves get faster. A voice agent does not take a coffee break. It does not
        hold someone on the line while it walks to find a folder. The caller asks a question, gets an
        answer, moves on.
      </p>

      <p><b>What pet owners feel.</b></p>
      <p>
        We have been collecting feedback from clinics that rolled this out for a quarter or more, and the
        same words come up over and over from clients: calm, easy, not on hold.
      </p>
      <p>
        The reaction is rarely "wow, that was an AI." It is "wow, that was fast." Owners do not usually
        want a memorable phone call. They want a fast one. They want their refill, their appointment,
        the answer to whether the clinic is open Saturday. When all of that is handled in under two
        minutes, they do not think about the technology. They just think about the clinic differently.
      </p>
      <p>
        The second shift is how the in-person visit feels. When the receptionist is not running between
        the phone and the lobby, check-in feels unhurried. Pet owners are greeted, not processed. The
        tech who comes out has time to ask how the dog has been doing since the last visit. The vet is
        not trying to make up time because the schedule fell behind. The visit is gentler from start
        to finish.
      </p>

      <p><b>What staff feel.</b></p>
      <p>
        The clearest signal we hear from clinic managers is not a metric — it is the way the room sounds.
        One owner described her front desk after deployment as "too quiet, in a good way." Staff are not
        shouting across each other to ask about a callback. They are not apologizing to a family for the
        seventh time about being on hold.
      </p>
      <p>
        The job people signed up for at the front desk was never "operate a phone system." It was
        "help pets and people." When the phone work moves into the background, what is left is closer
        to that original job description. Engagement goes up. Burnout goes down. We have heard from more
        than one clinic that the receptionist they were about to lose decided to stay.
      </p>

      <p><b>What the clinic gains.</b></p>
      <p>
        Every call that used to roll to voicemail is now a captured booking, a refill answered, a question
        resolved. The cumulative effect across a month is significant. Most of the clinics we work with
        see their missed-call rate drop into low single digits — often within the first three weeks.
        Booking volume goes up without adding chairs or staff.
      </p>
      <p>
        The harder-to-measure win is retention. Pet owners stay loyal to clinics that feel responsive.
        When their text gets answered, when their call goes through, when the visit feels unrushed —
        they do not comparison-shop. They do not call the next clinic. And they refer their neighbors.
      </p>

      <div className="about-story-separator" />

      <p><b>The honest part.</b></p>
      <p>
        None of this is about replacing the people at the front desk. It is about getting them out of
        the wrong job. The receptionist who used to spend her morning saying "please hold" can spend it
        greeting families. The technician who used to interrupt his lunch to grab a backlogged callback
        can eat his lunch. The vet who used to start the day behind can start it on time.
      </p>
      <p>This is not technology doing what humans should. It is technology doing what humans shouldn't have to.</p>

      <p><b>Where this goes.</b></p>
      <p>
        Five years ago, the conversation about AI in veterinary practice was theoretical. Today it is an
        operational decision. The clinics that are quietest, calmest, and most loved by their clients are
        not the ones with the biggest waiting rooms or the fanciest dental suites. They are the ones whose
        front desk has time to look up.
      </p>
      <p>
        If your team is tired of the noise, that is not a staffing problem. That is a phone problem.
        And a phone problem is something we can solve.
      </p>
    </JournalShell>
  );
}

function ArticleAIReceptionist() {
  return (
    <JournalShell
      tag="Industry"
      meta={["9 min read", "Jun 2026"]}
      title="How AI Receptionists Help Veterinary Clinics."
      kicker="More answered calls, less front desk burnout, and a better experience for every pet owner — from the first ring."
    >
      <p className="about-story-lede">
        Veterinary clinics are busy, emotional, and fast-moving environments. Pet owners call with appointment requests, urgent questions, medication needs, and concerns about their pets. At the same time, the front desk team is checking in clients, helping doctors, handling payments, and trying to keep the clinic running smoothly.
      </p>
      <p>
        This is where an AI voice receptionist can make a big difference. It answers calls automatically, speaks with pet owners in a natural voice, collects important information, and helps guide the caller to the right next step — booking appointments, capturing new client details, identifying returning clients, sending confirmations, and creating clean call summaries for the clinic team.
      </p>
      <p>
        Instead of letting calls go to voicemail or putting pet owners on hold, the clinic can offer faster, more consistent communication — day, night, weekends, and during peak hours.
      </p>

      <div className="about-story-separator" />

      <p><b>1. Answers Calls 24/7</b></p>
      <p>
        Many pet owners call before work, after work, during lunch breaks, or after the clinic is closed. An AI receptionist can answer those calls any time of day. This helps clinics avoid missed opportunities and gives pet owners a better experience from the first call.
      </p>

      <p><b>2. Reduces Front Desk Burnout</b></p>
      <p>
        Veterinary receptionists handle constant phone calls while also helping clients and pets inside the clinic. This creates stress, interruptions, and burnout. AI helps by taking routine calls off the team's plate, so the front desk can focus on the people and pets standing in front of them.
      </p>

      <p><b>3. Books More Appointments</b></p>
      <p>
        An AI receptionist can collect the reason for the visit, check availability, offer appointment times, and help schedule the client. This turns more phone calls into booked appointments instead of missed calls, voicemails, or delayed callbacks.
      </p>

      <p><b>4. Supports New Client Intake</b></p>
      <p>For new pet owners, the AI can collect important details such as owner name, pet name, species and breed, reason for visit, preferred appointment time, contact details, and special notes for the clinic. This gives the team cleaner information before the client arrives.</p>

      <p><b>5. Helps During Peak Hours</b></p>
      <p>
        Peak hours are when clinics lose the most calls. The team is busy checking in appointments, discharging patients, helping doctors, and answering in-person questions. AI voice support keeps calls moving even when the front desk is overloaded.
      </p>

      <p><b>6. Handles After-Hours Calls</b></p>
      <p>
        After-hours calls are a major missed opportunity for many clinics. A pet owner may call after work, hear voicemail, and then contact another clinic. An AI receptionist can answer after hours, collect the request, provide basic guidance, and prepare the clinic team with a clear summary for the next business day.
      </p>

      <p><b>7. Recognizes Urgent Situations</b></p>
      <p>
        AI receptionists can be trained to listen for emergency keywords and urgent symptoms. When a caller describes something serious, the AI can guide them to the clinic's emergency instructions or escalate the call based on clinic rules. This helps protect pets, clients, and the clinic team.
      </p>

      <p><b>8. Creates Clear Call Summaries</b></p>
      <p>
        After every call, the AI can leave a structured summary for the clinic — including who called, why they called, what information was collected, and what action was taken. This makes follow-up easier and helps reduce confusion.
      </p>

      <div className="about-story-separator" />

      <p><b>The Big Benefit</b></p>
      <p>
        An AI receptionist does not replace the heart of the veterinary team. It supports the team by handling repetitive phone work, reducing missed calls, and creating a smoother client experience.
      </p>
      <p>
        The result is simple: more answered calls, more booked appointments, less front desk stress, better service for pet owners, and more time for the clinic team to focus on patient care. AI voice reception is becoming a practical tool for modern veterinary clinics that want to improve communication, reduce staff pressure, and make every pet owner feel heard.
      </p>

      <div className="about-story-separator" />

      <p className="about-story-close">
        AI does not replace the human care team. It supports them — by handling repetitive phone work and helping every pet owner feel heard from the first call.
      </p>

      <div className="about-story-separator" />

      <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.7 }}>
        <b>Sources</b><br />
        <a href="https://www.puppilot.co/blog/veterinary-ai-phone-solutions-transforming-client-communication-in-animal-care" target="_blank" rel="noopener noreferrer" style={{ color: "var(--teal)" }}>Veterinary AI Phone Solutions: Transforming Client Communication in Animal Care — Puppilot</a><br />
        <a href="https://www.puppilot.co/blog/best-veterinary-ai-receptionist-tools-a-practical-guide-for-modern-clinics" target="_blank" rel="noopener noreferrer" style={{ color: "var(--teal)" }}>Best Veterinary AI Receptionist Tools: A Practical Guide for Modern Clinics — Puppilot</a><br />
        <a href="https://petdesk.com/blog/help-your-veterinary-front-desk-burnout" target="_blank" rel="noopener noreferrer" style={{ color: "var(--teal)" }}>Help Your Veterinary Front Desk Avoid Burnout — PetDesk</a><br />
        <a href="https://software.idexx.com/resources/blog/how-ai-for-veterinary-clinics-is-changing-the-future-of-client-communication" target="_blank" rel="noopener noreferrer" style={{ color: "var(--teal)" }}>How AI for Veterinary Clinics Is Changing the Future of Client Communication — IDEXX</a><br />
        <a href="https://www.picktime.com/resources/how-ai-powered-receptionist-enable-veterinary-clinics-to-secure-more-calls/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--teal)" }}>How AI-Powered Receptionists Enable Veterinary Clinics to Secure More Calls — Picktime</a>
      </p>
    </JournalShell>
  );
}

const JOURNAL_COMPONENTS = {
  receptionist:    ArticleReceptionist,
  sub400:          ArticleSub400,
  prairiePaws:     ArticlePrairiePaws,
  quietDesk:       ArticleQuietDesk,
  aiReceptionist:  ArticleAIReceptionist,
};

const slug = (typeof window !== "undefined" && window.JOURNAL_SLUG) || "receptionist";
const Page = JOURNAL_COMPONENTS[slug] || ArticleReceptionist;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Page />);
