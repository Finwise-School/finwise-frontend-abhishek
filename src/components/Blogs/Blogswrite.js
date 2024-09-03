import React from 'react';
import B1 from "../../assets/images/Blogs/b-1.png";
import B2 from "../../assets/images/Blogs/b-2.png";
import B3 from "../../assets/images/Blogs/b-3.png";
import B4 from "../../assets/images/Blogs/b-4.png";
import B5 from "../../assets/images/Blogs/b-5.png";

const Blogswrite = () => {
  return (
    <div className="container mx-auto px-4 py-8"> 
      <p className="text-lg text-gray-700 mb-8">
        Hey, fellow humans! So, you’ve finally started earning that sweet, sweet cash and thought to yourself, “Life’s good!”—until you noticed a chunk of your paycheck disappearing faster than a pack of crisps at a party. Welcome to the world of taxes, where the government takes a cut so they can keep the roads smooth, the schools teaching, and your Nana’s pension coming in.
      </p>
      <img src={B1} alt="" className="w-full mb-8" /> 

      <h2 className="text-2xl font-bold mb-4">
        1. The UK Tax System: It’s Not Just Monopoly Money
      </h2>
      <p className="text-lg text-gray-700 mb-4">
        Let’s kick things off with a quick reality check: taxes are a thing. They’re how the government funds stuff like the NHS, education, and, yep, those pothole repairs that never seem to end.
      </p>

      <h3 className="text-xl font-bold mb-4">
        Types of Taxes You’ll Face (Spoiler: There’s More Than One)
      </h3>
      <p className="text-lg text-gray-700 mb-4">
        Brace yourself, because taxes in the UK come in different flavors:
      </p>
      <ul className="list-disc list-inside ml-8 mb-8"> 
        <li>Income Tax</li>
        <li>National Insurance Contributions (NICs)</li>
        <li>Value Added Tax (VAT)</li>
        <li>Council Tax</li>
        <li>Capital Gains Tax</li>
        <li>Corporation Tax</li>
        <li>Inheritance Tax</li>
      </ul>
      <img src={B2} alt="" className="w-full mb-8" />


      <h2 className="text-2xl font-bold mb-4">
        2. Income Tax: When You Make It Rain, HMRC Takes a Sip
      </h2>
      <p className="text-lg text-gray-700 mb-4">
        Income tax is basically the price you pay for earning money. Think of it as your VIP pass to adulting. The government takes a slice of your earnings to keep the country running—like paying for that Spotify subscription, but instead of tunes, you get public services.
      </p>

      <h3 className="text-xl font-bold mb-4">
        How They Calculate Your Income Tax (No, You Can’t Opt Out)
      </h3>
      <p className="text-lg text-gray-700 mb-4">
        Your taxable income is like that pint glass at the pub—it has limits. Here’s what counts:
      </p>
      <ul className="list-disc list-inside ml-8 mb-8">
        <li>Job earnings (your 9-to-5 grind)</li>
        <li>Side hustle income (we see you, Etsy store owner!)</li>
        <li>Pension income (future you will thank current you)</li>
        <li>Rental income (if you’re fancy like that)</li>
        <li>Interest on savings (that you totally haven’t touched since opening it)</li>
      </ul>

      <h3 className="text-xl font-bold mb-4">
        Tax-Free Allowances: Freebies from HMRC
      </h3>
      <p className="text-lg text-gray-700 mb-4">
        Before the taxman comes knocking, you get a little something called a Personal Allowance. As of the 2023/2024 tax year, it’s £12,570—kind of like a “no-tax” zone. If you earn less than this, HMRC leaves you alone. If you’re raking in the big bucks (over £100,000), your allowance shrinks faster than the battery on your phone after a Netflix binge.
      </p>

      <h3 className="text-xl font-bold mb-4">
        Income Tax Rates: The More You Earn, The More They Take
      </h3>
      <p className="text-lg text-gray-700 mb-4">
        UK tax rates are like those tiers in a loyalty program—the more you earn, the higher the rate:
      </p>
      <ul className="list-disc list-inside ml-8 mb-8">
        <li>Basic Rate (20%): Income between £12,571 and £50,270</li>
        <li>Higher Rate (40%): Income between £50,271 and £125,140</li>
        <li>Additional Rate (45%): Income over £125,140</li>
      </ul>

      <h3 className="text-xl font-bold mb-4">
        Real-Life Example: How Income Tax Plays Out IRL
      </h3>
      <p className="text-lg text-gray-700 mb-8">
        Let’s say you’re making £40,000 a year. First, you get your £12,570 allowance (free money, woo!). What’s left—£27,430—is your taxable income. At a 20% tax rate, you’re paying £5,486 in taxes. Ouch. But hey, at least you’re contributing to society!
      </p>


      <h2 className="text-2xl font-bold mb-4">
        3. National Insurance Contributions: Your Ticket to the Future
      </h2>
      <p className="text-lg text-gray-700 mb-4">
        NICs are like your personal investment in the future you—funding stuff like your State Pension and other cool benefits that’ll come in handy when you’re older and wiser.
      </p>

      <h3 className="text-xl font-bold mb-4">
        NIC Rates: Because Paying Once Isn’t Enough
      </h3>
      <p className="text-lg text-gray-700 mb-4">
        Depending on your gig (employed, self-employed, or a mix of both), here’s what you’re looking at:
      </p>
      <ul className="list-disc list-inside ml-8 mb-8">
        <li>
          <b>Class 1 (Employees):</b>
          <ul className="list-disc list-inside ml-8">
            <li>12% on earnings between £12,570 and £50,270</li>
            <li>2% on anything above that</li>
          </ul>
        </li>
        <li>
          <b>Class 2 (Self-Employed):</b> £3.45 per week (if you’re earning more than £6,725)
        </li>
        <li>
          <b>Class 4 (Self-Employed):</b>
          <ul className="list-disc list-inside ml-8">
            <li>9% on profits between £12,570 and £50,270</li>
            <li>2% on profits above that</li>
          </ul>
        </li>
      </ul>

      <h3 className="text-xl font-bold mb-4">
        Example: NICs for the Self-Made Boss
      </h3>
      <p className="text-lg text-gray-700 mb-4">
        Say you’re self-employed and pulled in £30,000 last year. Here’s how the numbers shake out:
      </p>
      <ul className="list-disc list-inside ml-8 mb-8">
        <li>Class 2 NICs: £3.45 x 52 weeks = £179.40</li>
        <li>Class 4 NICs: 9% of £17,430 = £1,568.70</li>
      </ul>
      <p className="text-lg text-gray-700 mb-8">
        Total NICs = £1,748.10. It’s like a gym membership, but for future-you.
      </p>
      <img src={B3} alt="" className="w-full mb-8" />


      <h2 className="text-2xl font-bold mb-4">
        4. VAT: The Tax That’s Always Lurking
      </h2>
      <p className="text-lg text-gray-700 mb-4">
        VAT is the sneaky tax that’s already baked into the price of almost everything you buy. So, if you’ve ever wondered why that latte costs £3.60 instead of £3, here’s your answer.
      </p>

      <h3 className="text-xl font-bold mb-4">
        VAT Rates: Because Not Everything’s Equal
      </h3>
      <ul className="list-disc list-inside ml-8 mb-8">
        <li>
          <b>Standard Rate (20%):</b> For most stuff, like that phone upgrade you’ve been eyeing.
        </li>
        <li>
          <b>Reduced Rate (5%):</b> For things like home energy (yes, adulting is expensive).
        </li>
        <li>
          <b>Zero Rate (0%):</b> For the essentials, like most groceries and children’s clothes.
        </li>
      </ul>
      <img src={B4} alt="" className="w-full mb-8" />


      <h2 className="text-2xl font-bold mb-4">
        5. Council Tax: Paying Rent to the Government
      </h2>
      <p className="text-lg text-gray-700 mb-4">
        Council Tax is like the rent you pay for living in your area—it funds local services like bin collection, streetlights, and, occasionally, fixing those potholes. How much you pay depends on where you live and the value of your property.
      </p>

      <h3 className="text-xl font-bold mb-4">
        How Council Tax is Calculated
      </h3>
      <p className="text-lg text-gray-700 mb-4">
        Properties are slotted into bands (A to H), based on their value back in 1991 (yes, really). Depending on your band, you’ll pay more or less each year.
      </p>
      {/* Placeholder for map - You can add a map component here */}
      {/* <div className="w-full">
        {/* Your map component */}
      {/* </div> */}


      <h2 className="text-2xl font-bold mb-4">
        6. Capital Gains Tax: For When You Sell Stuff for Profit
      </h2>
      <p className="text-lg text-gray-700 mb-4">
        Sold your old Pokémon cards for a profit? Made a killing on that Bitcoin investment? Congratulations, you might owe Capital Gains Tax (CGT).
      </p>

      <h3 className="text-xl font-bold mb-4">
        CGT Rates: It’s All About the Tax Bands
      </h3>
      <p className="text-lg text-gray-700 mb-4">
        If your profits exceed £6,000 (2023/2024), here’s what you’re looking at:
      </p>
      <ul className="list-disc list-inside ml-8 mb-8">
        <li>
          <b>Basic Rate Taxpayers:</b> 10% on most gains, 18% on residential property
        </li>
        <li>
          <b>Higher Rate Taxpayers:</b> 20% on most gains, 28% on residential property
        </li>
      </ul>


      <h2 className="text-2xl font-bold mb-4">
        7. Corporation Tax: If You’re Running the Next Unicorn
      </h2>
      <p className="text-lg text-gray-700 mb-4">
        If you’ve started your own company (because why not?), you’ll need to pay Corporation Tax on any profits. The rate for the 2023/2024 tax year is 25% if your profits are over £250,000. Time to get that side hustle legit!
      </p>


      <h2 className="text-2xl font-bold mb-4">
        8. Inheritance Tax: The Tax You Pay When You Can’t Even Enjoy It
      </h2>
      <p className="text-lg text-gray-700 mb-4">
        Inheritance Tax (IHT) is the tax on what you leave behind. The standard rate is 40%, but only on the part of your estate that exceeds £325,000. To avoid giving the government your hard-earned cash, you can make some smart moves like gifting assets while you’re still around or donating to charity.
      </p>

      <h3 className="text-xl font-bold mb-4">
        How to Reduce Your IHT Bill
      </h3>
      <p className="text-lg text-gray-700 mb-4">
        Leave your fortune to your cat? Sure, why not—just know that gifts and donations can help you avoid handing over a chunk to HMRC.
      </p>

      <h2 className="text-2xl font-bold mb-4">
        9. Wrapping Up: You Got This, Tax Pro
      </h2>
      <p className="text-lg text-gray-700 mb-4">
        Look, taxes aren’t exactly a party, but they’re part of the deal when you’re earning money and doing life. The key takeaway? Get organized, stay on top of your paperwork, and know the basics—because the more you know, the more you save.
      </p>
      <p className="text-lg text-gray-700 mb-8">
        And if all else fails, there’s always that one friend who actually enjoys this stuff. Or, you know ;)
      </p>
      <img src={B5} alt="" className="w-full mb-8" />
    </div>
  );
};

export default Blogswrite;