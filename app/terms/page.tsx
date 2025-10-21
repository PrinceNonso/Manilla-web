import { HomeLayout } from "../components";

export default function () {
    return (
        <HomeLayout>
            <main className="bg-white">
                <section className="w-full relative">
                    <img src="/terms.jpg" alt="Privacy Policy Banner" className="absolute top-0 w-full left-0 h-full object-cover" />
                    <div className="relative bg-[rgba(0,0,0,0.2)] ">
                        <div className="min-h-[130px] lg:min-h-[250px] w-6/12 text-white flex items-center justify-center bg-[rgba(15,9,48,0.91)]">
                            <div className="">
                                <header className="flex font-semibold gap-x-1 items-center">
                                    <div className="h-2 w-2 bg-[#FFB60A]"></div>
                                    <p className="lg:text-xl">Manilla Finance</p>
                                </header>
                                <p className="text-2xl lg:text-6xl font-bold">Terms</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="max-w-[1196px] mx-auto py-12 px-4">
                    <p className="text-2xl lg:text-4xl font-bold">Terms and Conditions of Use – Manilla Finance Canada</p>
                    <div className="my-6 text-sm lg:text-xl">
                        <p><b>Effective Date: May 4th, 2025</b></p>
                        <p><b>Last Updated: May 4th, 2025</b></p>
                        <p>Welcome to Manilla Finance Inc. (“Manilla,” “we,” “our,” or “us”). These Terms and Conditions (“Terms”) govern your access to and use of our services, including through our mobile application, website, and any related platforms (collectively, the “Platform”).
                            Please read these Terms carefully. By accessing, registering, or using the Platform, you agree to be bound by these Terms. If you do not agree with any part of these Terms, you must not use our services.

                        </p>
                    </div>
                    <div className="py-4 lg:py-8 text-sm lg:text-lg text-[#333333]">
                        <p className="lg:text-2xl font-semibold">1. Eligibility</p>
                        <p>You must be:</p>
                        <ul className="list-disc list-inside space-y-1 text-gray-800">
                            <li>At least 18 years old, or the age of majority in your jurisdiction, whichever is greater;</li>
                            <li>A resident of Canada (for services restricted to Canadian users);</li>
                            <li>Legally capable of entering into binding contracts.</li>
                        </ul>

                    </div>
                    <div className="py-4 lg:py-8 text-sm lg:text-lg text-[#333333]">
                        <p className="lg:text-2xl font-semibold">2. Account Registration</p>
                        <p>To access most features of the Platform, you must register and create a personal account. You agree to:</p>
                        <ul className="list-disc list-inside space-y-1 text-gray-800">
                            <li>Provide accurate and complete information;</li>
                            <li>Keep your login credentials confidential;</li>
                            <li>Immediately notify us of any unauthorized use or suspected breach of your account</li>
                        </ul>
                        <p>You are responsible for all activities that occur under your account.:</p>
                    </div>
                    <div className="py-4 lg:py-8 text-sm lg:text-lg text-[#333333]">
                        <p className="lg:text-2xl font-semibold">3. Use of the Platform</p>
                        <p>You agree to use the Platform:</p>
                        <ul className="list-disc mb-1 list-inside space-y-1 text-gray-800">
                            <li>Only for lawful purposes;</li>
                            <li>In accordance with these Terms, our Privacy Policy, and applicable laws;</li>
                            <li>Without infringing on others’ rights or violating any applicable financial or anti-money laundering regulations.</li>
                        </ul>

                        <p>You agree to use the Platform:</p>
                        <ul className="list-disc list-inside space-y-1 text-gray-800">
                            <li>Only for lawful purposes;</li>
                            <li>In accordance with these Terms, our Privacy Policy, and applicable laws;</li>
                            <li>Without infringing on others’ rights or violating any applicable financial or anti-money laundering regulations.</li>
                        </ul>
                    </div>
                    <div className="py-4 lg:py-8 text-sm lg:text-lg text-[#333333]">
                        <p className="lg:text-2xl font-semibold">4. Financial Transactions & Crypto Payments</p>
                        <p>Manilla Finance Canada allows users to</p>
                        <ul className="list-disc list-inside space-y-1 text-gray-800">
                            <li>Pay utility bills and purchase digital services;</li>
                            <li>Make fiat and cryptocurrency-based transactions;</li>
                            <li>Access services such as remittance, gift cards, and P2P exchange (where applicable).</li>
                        </ul>


                        <p>All financial transactions are subject to</p>
                        <ul className="list-disc list-inside space-y-1 text-gray-800">
                            <li>Applicable service fees and charges;</li>
                            <li>KYC/AML compliance;</li>
                            <li>Processing limits and verification protocols</li>
                        </ul>
                        <p>You are solely responsible for the accuracy of payment details and wallet addresses. Transactions in crypto are <b>non-reversible.</b></p>

                    </div>
                    <div className="py-4 lg:py-8 text-sm lg:text-lg text-[#333333]">
                        <p className="lg:text-2xl font-semibold">5. KYC, Compliance, and Account Suspension</p>
                        <p>In compliance with Canadian laws, we may require identity verification (KYC). We reserve the right to</p>
                        <ul className="list-disc list-inside space-y-1 text-gray-800">
                            <li>Request additional documentation at any time;</li>
                            <li>Suspend or terminate your account if you fail verification;</li>
                            <li>Report suspicious activity to law enforcement or regulatory bodies.</li>
                        </ul>

                        <p>All third-party vendors are contractually obligated to maintain strict confidentiality and comply with Canadian data protection laws.</p>
                    </div>
                    <div className="py-4 lg:py-8 ext-sm lg:text-lg text-[#333333]">
                        <p className="lg:text-2xl font-semibold">6. Intellectual Property</p>
                        <p>All content, branding, and features on the Platform — including logos, code, designs, trademarks, and text — are owned or licensed by Manilla Finance Canada.</p>
                        <p>You may not use, copy, or distribute our intellectual property without our written permission</p>
                    </div>
                    <div className="py-4 lg:py-8 ext-sm lg:text-lg text-[#333333]">
                        <p className="lg:text-2xl font-semibold">7. Third-Party Services</p>
                        <p>The Platform may contain links to or integrate third-party services (e.g., payment processors, cloud wallets). We are not responsible for:</p>
                        <ul className="list-disc list-inside space-y-1 text-gray-800">
                            <li>The accuracy, content, or policies of third-party platforms;</li>
                            <li>Any loss or damage arising from your use of those services.</li>
                        </ul>
                        <p>Use of third-party services is subject to their respective terms and privacy policies.</p>

                    </div>
                    <div className="py-4 lg:py-8 ext-sm lg:text-lg text-[#333333]">
                        <p className="lg:text-2xl font-semibold">8. Limitation of Liability</p>
                        <p>the fullest extent permitted by law, Manilla Finance Canada shall not be liable for:</p>
                        <ul className="list-disc list-inside space-y-1 text-gray-800">
                            <li>Indirect, incidental, or consequential damages;</li>
                            <li>Loss of funds due to user error, technical glitches, or third-party failures;</li>
                            <li>Any delay or disruption in services caused by external factors (e.g., power outages, blockchain delays, market volatility)</li>
                        </ul>


                        <p>All services are provided on an “as is” and “as available” basis without warranties of any kind, express or implied.</p>

                    </div>
                    <div className="py-4 lg:py-8 ext-sm lg:text-lg text-[#333333]">
                        <p className="lg:text-2xl font-semibold">9. Termination</p>
                        <p>We may terminate or suspend your access to the Platform at our discretion, with or without notice, if you:</p>
                        <ul className="list-disc list-inside space-y-1 text-gray-800">
                            <li>Violate these Terms or applicable laws;</li>
                            <li>Engage in fraudulent or abusive behavior;</li>
                            <li>Pose a risk to our platform or other users.</li>
                        </ul>
                        <p>Upon termination</p>
                        <ul className="list-disc list-inside space-y-1 text-gray-800">
                            <li>Your access will be revoked;</li>
                            <li>We may retain records as required by law;</li>
                            <li>Outstanding payments or obligations remain enforceable.</li>
                        </ul>
                    </div>
                    <div className="py-4 lg:py-8 ext-sm lg:text-lg text-[#333333]">
                        <p className="lg:text-2xl font-semibold">10. Privacy</p>
                        <p>Our collection and use of your data is governed by our Privacy Policy, which complies with Canada’s Personal Information Protection and Electronic Documents Act (PIPEDA). By using the Platform, you consent to our data practices.</p>
                    </div>
                    <div className="py-4 lg:py-8 ext-sm lg:text-lg text-[#333333]">
                        <p className="lg:text-2xl font-semibold">11.   Amendments to These Terms</p>
                        <p>We reserve the right to update or modify these Terms at any time. Changes become effective upon being posted on the Platform. Your continued use after any modifications indicates your acceptance of the revised Terms.</p>
                    </div>
                    <div className="py-4 lg:py-8 text-sm lg:text-lg text-[#333333]">
                        <p className="lg:text-2xl font-semibold">12.Governing Law and Jurisdiction</p>
                        <p>These Terms are governed by the laws of the <b>Province of Ontario</b> and the <b>federal laws of Canada</b>. Any disputes shall be resolved in the courts of Ontario, Canada.</p>
                    </div>
                    <div className="py-4 lg:py-8 text-sm lg:text-lg text-[#333333]">
                        <p className="lg:text-2xl font-semibold">13. Contact Us</p>
                        <p>For questions or concerns regarding your personal data, or to exercise your rights, please contact our Privacy Officer:</p>
                    </div>
                    <div className="py-4 lg:py-8 text-sm lg:text-lg text-[#333333]">
                        <p className="font-semibold">Privacy Officer</p>
                        <p>Manilla Finance Inc.</p>
                        <p>Email: privacy@manilla.finance</p>
                    </div>
                </section>
            </main>
        </HomeLayout>
    )
}