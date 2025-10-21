import { HomeLayout } from "../components";

export default function () {
    return (
        <HomeLayout>
            <main className="bg-white">
                <section className="w-full relative">
                    <img src="/policy.jpg" alt="Privacy Policy Banner" className="absolute top-0 w-full left-0 h-full object-cover" />
                    <div className="relative bg-[rgba(0,0,0,0.2)] ">
                        <div className="min-h-[130px] lg:min-h-[250px] w-6/12 text-white flex items-center justify-center bg-[rgba(15,9,48,0.91)]">
                            <div className="">
                                <header className="flex font-semibold gap-x-1 items-center">
                                    <div className="h-2 w-2 bg-[#FFB60A]"></div>
                                    <p className="lg:text-xl">Manilla Finance</p>
                                </header>
                                <p className="text-2xl lg:text-6xl font-bold">Privacy Policy</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="max-w-[1196px] mx-auto py-12 px-4">
                    <p className="text-2xl lg:text-4xl font-bold">Privacy Policy – Manilla Finance Canada</p>
                    <div className="my-6 text-sm lg:text-xl">
                        <p><b>Effective Date: May 4th, 2025</b></p>
                        <p>Welcome to Manilla Finance Canada. We are committed to protecting your privacy and the confidentiality of your personal information. This Privacy Policy outlines how we collect, use, disclose, store, and safeguard your information in accordance with <b>Canada’s Personal Information Protection and Electronic Documents Act (PIPEDA)</b> and applicable provincial privacy laws.
                            By using our platform — whether through our mobile app or website — you consent to the practices described in this policy.
                        </p>
                    </div>
                    <div className="py-4 lg:py-8 text-sm lg:text-lg text-[#333333]">
                        <p className="lg:text-2xl font-semibold">1. Information We Collect</p>
                        <p>We collect the following types of personal and technical information:</p>
                        <div className="mt-6">
                            <p className="font-semibold">a) Personal Information</p>
                            <ul className="list-disc list-inside space-y-1 text-gray-800">
                                <li>Full name</li>
                                <li>Email address</li>
                                <li>Mailing address</li>
                                <li>Phone number</li>
                                <li>Government-issued ID (for KYC purposes)</li>
                                <li>Date of birth</li>
                                <li>Financial details (e.g., bank info, crypto wallet addresses)</li>
                                <li>Billing and transaction history</li>
                            </ul>

                        </div>
                        <div className="mt-6">
                            <p className="font-semibold">b) Technical & Usage Data</p>
                            <ul className="list-disc list-inside space-y-1 text-gray-800">
                                <ul className="list-disc list-inside space-y-1 text-gray-800">
                                    <li>Device information (model, OS, browser type)</li>
                                    <li>IP address and geolocation</li>
                                    <li>Usage behavior (pages visited, features used)</li>
                                    <li>Cookies and tracking data</li>
                                </ul>

                            </ul>

                        </div>
                    </div>
                    <div className="py-4 lg:py-8 text-sm lg:text-lg text-[#333333]">
                        <p className="lg:text-2xl font-semibold">2. How We Collect Information</p>
                        <p>Your data may be collected through:</p>
                        <ul className="list-disc list-inside space-y-1 text-gray-800">
                            <li>Direct interactions (account sign-up, KYC verification, customer support)</li>
                            <li>Automated technologies (cookies, analytics)</li>
                            <li>Third-party service providers (payment processors, ID verification systems)</li>
                        </ul>
                    </div>
                    <div className="py-4 lg:py-8 text-sm lg:text-lg text-[#333333]">
                        <p className="lg:text-2xl font-semibold">3. Why We Collect Your Information</p>
                        <ul className="list-disc list-inside space-y-1 text-gray-800">
                            <li>To create and manage your account</li>
                            <li>To verify your identity and comply with anti-money laundering (AML) and KYC regulations</li>
                            <li>To process transactions securely</li>
                            <li>To provide customer support</li>
                            <li>To improve our services and app performance</li>
                            <li>To comply with legal obligations and regulatory requirements</li>
                        </ul>

                    </div>
                    <div className="py-4 lg:py-8 text-sm lg:text-lg text-[#333333]">
                        <p className="lg:text-2xl font-semibold">4. Consent and Your Rights</p>
                        <p>We obtain your explicit consent for collecting, using, and disclosing your personal information. You may withdraw your consent at any time, subject to legal or contractual restrictions.</p>
                        <p>Under PIPEDA, you have the right to:</p>
                        <ul className="list-disc list-inside space-y-1 text-gray-800">
                            <li>Access your personal information</li>
                            <li>Request corrections</li>
                            <li>Withdraw consent for data processing</li>
                            <li>File a complaint with the Office of the Privacy Commissioner of Canada</li>
                        </ul>
                    </div>
                    <div className="py-4 lg:py-8 text-sm lg:text-lg text-[#333333]">
                        <p className="lg:text-2xl font-semibold">5. Disclosure of Your Information</p>
                        <p>We do not sell or rent your personal information. We may share it with trusted third parties only when necessary, including:</p>
                        <ul className="list-disc list-inside space-y-1 text-gray-800">
                            <li>Service providers (e.g., cloud hosting, payment gateways, verification tools)</li>
                            <li>Law enforcement or regulatory agencies (only when legally required)</li>
                            <li>Business partners (strictly limited to service provision purposes and under contract)</li>
                        </ul>
                        <p>All third-party vendors are contractually obligated to maintain strict confidentiality and comply with Canadian data protection laws.</p>
                    </div>
                    <div className="py-4 lg:py-8 ext-sm lg:text-lg text-[#333333]">
                        <p className="lg:text-2xl font-semibold">6. How We Protect Your Information</p>
                        <p>We use industry-standard security measures to protect your data, including:</p>
                        <ul className="list-disc list-inside space-y-1 text-gray-800">
                            <li>SSL encryption for data transmission</li>
                            <li>Two-factor authentication (2FA)</li>
                            <li>Regular security audits and penetration testing</li>
                            <li>Secure data storage on Canadian or privacy-compliant cloud servers</li>
                        </ul>
                    </div>
                    <div className="py-4 lg:py-8 ext-sm lg:text-lg text-[#333333]">
                        <p className="lg:text-2xl font-semibold">7. International Data Transfers</p>
                        <p>While we strive to store data in Canada, some information may be transferred to or processed in jurisdictions outside Canada. In such cases, we ensure that appropriate contractual, legal, and technical safeguards are in place to protect your information.</p>
                    </div>
                    <div className="py-4 lg:py-8 ext-sm lg:text-lg text-[#333333]">
                        <p className="lg:text-2xl font-semibold">8. Retention of Personal Information</p>
                        <p>We retain your data only for as long as necessary to.</p>
                        <ul className="list-disc list-inside space-y-1 text-gray-800">
                            <li>Fulfill the purposes outlined in this policy</li>
                            <li>Meet legal, accounting, or regulatory obligations</li>
                        </ul>

                        <p>When no longer required, your data is securely deleted or anonymized</p>

                    </div>
                    <div className="py-4 lg:py-8 ext-sm lg:text-lg text-[#333333]">
                        <p className="lg:text-2xl font-semibold">9. Cookies and Tracking Technologies</p>
                        <p>We use cookies to:</p>
                        <ul className="list-disc list-inside space-y-1 text-gray-800">
                            <li>Enhance user experience</li>
                            <li>Analyze traffic and user behavior</li>
                            <li>Provide relevant advertising</li>
                        </ul>
                        <p>You can disable cookies through your browser settings; however, some features of our app or website may not function properly.</p>
                    </div>
                    <div className="py-4 lg:py-8 ext-sm lg:text-lg text-[#333333]">
                        <p className="lg:text-2xl font-semibold">10. Children’s Privacy</p>
                        <p>Our services are not intended for users under the age of 18. We do not knowingly collect personal data from children. If we learn we have inadvertently collected data from a minor, we will delete it promptly.</p>
                    </div>
                    <div className="py-4 lg:py-8 ext-sm lg:text-lg text-[#333333]">
                        <p className="lg:text-2xl font-semibold">11.  Changes to This Privacy Policy</p>
                        <p>We may update this Privacy Policy periodically to reflect changes in legal requirements or business practices. You will be notified of any material changes via email or in-app alert. Continued use of the platform constitutes acceptance of the revised policy.</p>
                    </div>
                    <div className="py-4 lg:py-8 text-sm lg:text-lg text-[#333333]">
                        <p className="lg:text-2xl font-semibold">12. Contact Us</p>
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