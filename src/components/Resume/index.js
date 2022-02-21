import React, { Component } from 'react';

class Resume extends Component {
    render() {
      return (
        <section>
            <h1 className="resume">Resume</h1>
            <div className="resumedownload">
                <a
                    href="https://docs.google.com/document/d/1ZgSXVD-9xCLYwIz2VwVTHZ59VGnh2DoOHiy57AOAQfw/edit?usp=sharing"
                    download
                >
                    Click To Download File
                </a>
            </div>
            <br />
            <hr class="rounded"></hr>
            <h2 className="education">Education</h2>
            <table>
                <tr>
                    <th>Organization</th>
                    <th>Degree Name</th>
                    <th>Year Graduated</th>
                    <th>GPA or Completion</th>
                </tr>
                <tr>
                    <td>Michigan State University</td>
                    <td>Coding Boot Camp</td>
                    <td>2021-2022</td>
                    <td>TBD</td>
                </tr>
                <tr>
                    <td>Project Management Institute</td>
                    <td>Project Management Professional (PMP)</td>
                    <td>2005</td>
                    <td>Complete (1566117)</td>
                </tr>
                <tr>
                    <td>Walsh College</td>
                    <td>Masters of Science in Business Information Technology</td>
                    <td>2001-2003</td>
                    <td>3.791</td>
                </tr>
                <tr>
                    <td>Western Michigan University</td>
                    <td>Batchelors of Science</td>
                    <td>1997-2001</td>
                    <td>TBD</td>
                </tr>
            </table>
            <hr class="rounded"></hr>
            <h2 className="experience">Experience</h2>
            <div className="job">
                <div className="job-title">Consultant Project Manager</div>
                <div class="company">Conexess, Customer: Oakland County Information Technology Department</div>
                <div class="address">1201 N Telegraph Rd, Pontiac, MI 48341, (248) 858-1800</div>
                <div class="dates-emp">March 2015 - March 2020</div>
                <br></br>
                <div class="description">Responsible for a team of software engineers, business analysts, system analysts, and infrastructure to implement software through a waterfall and agile methodology.</div>
                <br></br>
                <div class="achievements">
                    <ul>
                        <li>Managed the acquisition of two separate large software solutions through a reliable request for proposal process; including an ERP System and a Jail Management Solution</li>
                        <li>Managed the proof of concept phase for an Oracle Upgrade from 11g to 19c. </li>
                        <li>Managed on-going IT activities for CLEMIS, the Board of Commissioners, Corporation Counsel, Medical Examiner, Human Resources, Fiscal Services, Procurement, and Compliance departments.</li> 
                        <li>Continued assistance with helping a department track time and document projects, who was not used to doing so.</li>
                        <br></br>
                    </ul>
                </div>
            </div>
            <div className="job">
                <div class="job-title">Project Manager III</div>
                <div class="company">Thomson Reuters: IP & Science</div>
                <div class="address">30200 Telegraph Road, Suite 300, Bingham Farms, Michigan 48025,248-352-5810</div>
                <div class="dates-emp">August 2012 - March 2015</div>
                <br></br>
                <div class="description">Responsible for a team of Consultant, Business Analyst, Quality Assurance, Programmer and Training personnel to implement the Thomson IP Manager software application utilizing an agile based methodology.</div>
                <br></br>
                <div class="achievements">
                    <ul>
                        <li>Helped run a project to map and improve the implementation process of Thomson IP Manager for both new and upgrade customers.</li>
                        <li>Mentored several junior project managers through the implementation methodology at Thomson Reuters by using PMBOK.</li>
                        <li>Rescued two separate large projects from walking away by revamping the project artifacts and applying a rigid structure to the project.</li>
                        <li>On small projects, assisted the developers with troubleshooting problems through hands on SQL application.</li>
                        <br></br>
                    </ul>
                </div>
            </div>
            <div className="job">
                <div class="job-title">Project Manager</div>
                <div class="company">Wolters Kluwer Financial Services</div>
                <div class="address">6815 Saukview Dr., Saint Cloud, MN 56303, 320-251-3060</div>
                <div class="dates-emp">November 2005 - August 2012</div>
                <br></br>
                <div class="description">Led a team of implementation consultants and trainers through the ComplianceOne product from inception through close using a waterfall methodology. Customers included small to large regional banks and credit unions. Average project budgets ranged from $20,000 to $1M depending on the configuration and infrastructure required for the software to run at the customer’s site.</div>
                <br></br>
                <div class="achievements">
                    <ul>
                        <li>Origination through Closing of Mortgage (In-House and Secondary), Lending (Consumer / Commercial), and Deposit Account document creation and production using ComplianceOne. Includes interfaces for Core Accounting, Document Imaging / Bar Coding, and eSignature</li>
                        <li>HSA Account Opening and Maintenance including Debit Card setup and account transfers from outside solutions while working with core accounting solutions.</li>
                        <br></br>
                    </ul>
                </div>
            </div>
            <div className="job">
                <div class="job-title">Technical Product Implentation Specialist</div>
                <div class="company">Wolters Kluwer Financial Services</div>
                <div class="address">6815 Saukview Dr., Saint Cloud, MN 56303, 320-251-3060</div>
                <div class="dates-emp">September 2003 - November 2005</div>
                <br></br>
                <div class="description">Led Medium to Large projects to implement the RAKIS documentation engine into partners and customers loan origination systems. Included consulting via project management and best software practices over a 9 month to 1 year project duration.</div>
                <br></br>
                <div class="achievements">
                    <ul>
                        <li>Served as techncial point of contact for the Fiserv Loan Origination System integration to RAKIS.</li>
                        <br></br>
                    </ul>
                </div>
            </div>
        </section>
      );
    }
  }
  
  export default Resume; 