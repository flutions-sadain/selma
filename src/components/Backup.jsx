import React, { useState } from 'react';
import { FaCloudUploadAlt } from "react-icons/fa";

const Backup = () => {
    const [hasCloudStorage, setHasCloudStorage] = useState(false);
    const [selectedRegion, setSelectedRegion] = useState('');
    const [selectedStorage, setSelectedStorage] = useState('');

    const handleYesClick = () => {
        setHasCloudStorage(true);
    };

    const handleNoClick = () => {
        setHasCloudStorage(false);
    };

    const handleRegionChange = (e) => {
        setSelectedRegion(e.target.value);
    };

    const handleStorageChange = (e) => {
        setSelectedStorage(e.target.value);
    };
    return (
        <div>
            <div className="flex items-center mt-4 gap-2">
                <FaCloudUploadAlt className="text-2xl" />
                <h1 className="text-xl font-medium">Backup</h1>
            </div>
            <div className="mt-4">
                <div class="grid gap-y-4 w-3/5">
                    <div>
                        <label for="cloudEnvironment" class="block text-sm mb-2">Cloud Environment</label>
                        <div class="relative">
                            <select type="text" name="cloudEnvironment" class="py-3 px-4 block w-full bg-[#F5F7FA] focus:outline-none border-gray-200 rounded-lg text-sm">
                                <option value="AWS">AWS</option>
                                <option value="GCP">GCP</option>
                                <option value="Azure">Azure</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label for="serviceBackup" class="block text-sm mb-2">Service Backup</label>
                        <div class="relative">
                            <select type="text" name="serviceBackup" class="py-3 px-4 block w-full bg-[#F5F7FA] focus:outline-none border-gray-200 rounded-lg text-sm">
                                <option value="SAP">SAP</option>
                                <option value="SNOW">SNOW</option>
                                <option value="Salesforce">Salesforce</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label for="backupRequired" class="block text-sm font-semibold mb-2">Backup Required</label>
                        <div class="flex items-center gap-4">
                            <div class="flex items-center">
                                <input checked id="default-radio-1" type="radio" value="" name="default-radio" class="w-5 h-5 text-[#5417D7] bg-gray-100 border-gray-300 focus:ring-[#5417D7]" />
                                <label for="default-radio-1" class="block text-sm ms-2">Default radio</label>
                            </div>
                            <div class="flex items-center">
                                <input id="default-radio-2" type="radio" value="" name="default-radio" class="w-5 h-5 text-[#5417D7] bg-gray-100 border-gray-300 focus:ring-[#5417D7]" />
                                <label for="default-radio-2" class="block text-sm ms-2">Checked state</label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label for="databaseType" class="block text-sm mb-2">Database type</label>
                        <div class="relative">
                            <select type="text" name="databaseType" class="py-3 px-4 block w-full bg-[#F5F7FA] focus:outline-none border-gray-200 rounded-lg text-sm">
                                <option value="Oracle">Oracle</option>
                                <option value="HANA">HANA</option>
                                <option value="MySQL">MySQL</option>
                                <option value="DB2">DB2</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label for="databaseType" class="block text-sm font-semibold mb-2">Do you Have Existing cloud storage?</label>
                        <div class="flex items-center gap-2">
                            <button onClick={handleYesClick} className={`w-14 py-1 rounded-sm ${hasCloudStorage ? 'bg-[#5417D7] text-white' : 'bg-gray-200'}`}>Yes</button>
                            <button onClick={handleNoClick} className={`w-14 py-1 rounded-sm ${hasCloudStorage ? 'bg-gray-200' : 'bg-[#5417D7] text-white '}`}>No</button>
                        </div>
                    </div>
                    {hasCloudStorage ? (
                        <>
                            <div>
                                <label for="serviceRegion" class="block text-sm mb-2">Select Region</label>
                                <div class="relative">
                                    <select value={selectedRegion} name="serviceRegion" onChange={handleRegionChange} class="py-3 px-4 block w-full bg-[#F5F7FA] focus:outline-none border-gray-200 rounded-lg text-sm">
                                        <option value="Oracle">Oracle</option>
                                        <option value="India">India</option>
                                        <option value="USA">USA</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label for="preferredStorage" class="block text-sm font-semibold mb-2">Preferred Storage</label>
                                <div className="flex items-center gap-4">
                                    {[1, 2, 4, 6, 8].map((size) => (
                                        <div className="flex items-center" key={size}>
                                            <input
                                                checked={selectedStorage === `${size} TB`}
                                                onChange={handleStorageChange}
                                                id={`preferredStorage-${size}`}
                                                type="radio"
                                                value={`${size} TB`}
                                                name="preferredStorage"
                                                className="w-5 h-5 text-[#5417D7] bg-gray-100 border-gray-300 focus:ring-[#5417D7]"
                                            />
                                            <label htmlFor={`preferredStorage-${size}`} className="block text-sm ms-2">{`${size} TB`}</label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </>
                    ) : (
                        <p className="block text-sm mb-2">Create your account today and experience the freedom of storing, accessing, and sharing your data securely from anywhere, anytime.</p>
                    )}
                    <button type="submit" class="w-1/2 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-md border border-transparent bg-[#5417D7] text-white disabled:opacity-50 disabled:pointer-events-none">Create New Account</button>
                </div>
            </div>
        </div>
    )
}

export default Backup;