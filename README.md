# SeSAC

---
## Crawling

### requests를 사용해서 채용사이트의 정보를 가져왔습니다.
```py
position_data = []
useful_keys = ('id', 'title', 'companyName', 'serviceInfo', 'responsibility', 'qualifications', 'preferredRequirements', 'welfares', 'recruitProcess', 'location', 'companyProfileId', 'companyUrl', 'alwaysOpen')
career_keys = ('newcomer', 'minCareer', 'maxCareer', 'education', 'graduate')
period_keys = ('publishedAt', 'closedAt')

positions = []
companies = []
position_keys = ('jobCategories_id', 'jobCategories', 'techStacks', 'responsibility', 'qualifications', 'preferredRequirements')
company_keys = ('companyProfileId', 'companyName', 'serviceInfo', '''companyUrl', 'address')
company_keys = ('companyProfileId', 'companyName', 'serviceInfo', 'welfares', 'companyUrl', 'address')

visited_companies = set()

# 채용 정보 저장
for id in tqdm(position_ids):
    response = requests.get(f'https://api.jumpit.co.kr/api/position/{id}', cookies=cookies, headers=headers)
    response = response.json()["result"]
    data = {key: response[key] for key in useful_keys}
    data.update({
        'techStacks': [stack['stack'] for stack in response['techStacks']], 
        'employmentType': response['jobPostingForSearchEngine']['employmentType'], 'experienceRequirements': response['jobPostingForSearchEngine']['experienceRequirements'],
        'address': response['workingPlaces'][0]['address'], 'isDomestic': response['workingPlaces'][0]['isDomestic'], 
        'jobCategories_id': response['jobCategories'][0]['id'], 'jobCategories': response['jobCategories'][0]['name'],
        'recruitPeriod': [response[key] for key in period_keys],
        'career': [response[key] for key in career_keys]
        })
    position_data.append(data)
    positions.append({key: data[key] for key in position_keys})
    if (company_id:=data['companyProfileId']) not in visited_companies:
        companies.append({key: data[key] for key in company_keys})
        visited_companies.add(company_id)
```

---
## Visualization

### 직무별 공고 비율 및 요구 스택 통계 자료를 matplotlib과 seaborn으로 시각화했습니다. 
![Pie Chart - Job posting ratio by position](https://github.com/k4west/SeSAC/assets/125423305/27b860c7-b455-45bd-bfd9-37fc56e73eb3)

<div className="text-center my-4 border border-black flex flex-wrap justify-center w-2/3 m-auto">
    <img src='https://github.com/k4west/SeSAC/assets/125423305/3bfef3ac-0900-45a3-84c8-7569a71f0672' width="300" height="450" padding="0" className="m-2 transition-transform duration-300 hover:scale-150"/>
    <img src='https://github.com/k4west/SeSAC/assets/125423305/a69224a4-1fa6-4986-b3f5-f93564422dc8' width="300" height="450" padding="0" className="m-2 transition-transform duration-300 hover:scale-150"/>
    <img src='https://github.com/k4west/SeSAC/assets/125423305/add97eba-18aa-402b-a090-430038f372a2' width="300" height="450" padding="0" className="m-2 transition-transform duration-300 hover:scale-150"/>
    <img src='https://github.com/k4west/SeSAC/assets/125423305/1862e393-4952-479c-8bf8-cfcc30e99df2' width="300" height="450" padding="0" className="m-2 transition-transform duration-300 hover:scale-150"/>
    <img src='https://github.com/k4west/SeSAC/assets/125423305/7c2942b0-f738-4b3c-87c9-3a0bac9d0c0f' width="300" height="450" padding="0" className="m-2 transition-transform duration-300 hover:scale-150"/>
    <img src='https://github.com/k4west/SeSAC/assets/125423305/24f71fbc-2730-4a3c-b4a5-b1d0a297b79e' width="300" height="450" padding="0" className="m-2 transition-transform duration-300 hover:scale-150"/>
    <img src='https://github.com/k4west/SeSAC/assets/125423305/eb9de1ea-37c3-44dd-8f31-3d4ff67c0f7a' width="300" height="450" padding="0" className="m-2 transition-transform duration-300 hover:scale-150"/>
    <img src='https://github.com/k4west/SeSAC/assets/125423305/4aca945c-dc0f-4b55-8f02-2de8e00cbd0f' width="300" height="450" padding="0" className="m-2 transition-transform duration-300 hover:scale-150"/>
    <img src='https://github.com/k4west/SeSAC/assets/125423305/92effa90-f7d7-43f4-93f5-828cafe29078' width="300" height="450" padding="0" className="m-2 transition-transform duration-300 hover:scale-150"/>
    <img src='https://github.com/k4west/SeSAC/assets/125423305/1c566626-c83c-4d62-af21-1a376ee1a2d9' width="300" height="450" padding="0" className="m-2 transition-transform duration-300 hover:scale-150"/>
    <img src='https://github.com/k4west/SeSAC/assets/125423305/030205de-67b8-473b-a148-c4274a029912' width="300" height="450" padding="0" className="m-2 transition-transform duration-300 hover:scale-150"/>
    <img src='https://github.com/k4west/SeSAC/assets/125423305/6591c57a-6c88-4fac-99a5-c7b7abd8849d' width="300" height="450" padding="0" className="m-2 transition-transform duration-300 hover:scale-150"/>
    <img src='https://github.com/k4west/SeSAC/assets/125423305/6a843a95-b863-4811-80f9-9325b0c574f4' width="300" height="450" padding="0" className="m-2 transition-transform duration-300 hover:scale-150"/>
    <img src='https://github.com/k4west/SeSAC/assets/125423305/fe65f843-9175-4a16-88a9-4e3930a34b38' width="300" height="450" padding="0" className="m-2 transition-transform duration-300 hover:scale-150"/>
    <img src='https://github.com/k4west/SeSAC/assets/125423305/916ec2ee-5d49-40a0-88e6-6ca27376dd08' width="300" height="450" padding="0" className="m-2 transition-transform duration-300 hover:scale-150"/>
    <img src='https://github.com/k4west/SeSAC/assets/125423305/23724243-6f86-40df-a771-980f27e82155' width="300" height="450" padding="0" className="m-2 transition-transform duration-300 hover:scale-150"/>
    <img src='https://github.com/k4west/SeSAC/assets/125423305/57d3cd84-b8cd-4834-822e-da1d3609b3fb' width="300" height="450" padding="0" className="m-2 transition-transform duration-300 hover:scale-150"/>
    <img src='https://github.com/k4west/SeSAC/assets/125423305/8748c017-d68b-41d4-abca-55f0cd774fb9' width="300" height="450" padding="0" className="m-2 transition-transform duration-300 hover:scale-150"/>
    <img src='https://github.com/k4west/SeSAC/assets/125423305/82c19fd6-6051-4b55-a557-1f5a2880f3e2' width="300" height="450" padding="0" className="m-2 transition-transform duration-300 hover:scale-150"/>
    <img src='https://github.com/k4west/SeSAC/assets/125423305/63700447-25ce-483b-9efc-e68a9e68f8cb' width="300" height="450" padding="0" className="m-2 transition-transform duration-300 hover:scale-150"/>
    <img src='https://github.com/k4west/SeSAC/assets/125423305/c307c212-3da8-41c8-8f95-79b11ec050ad' width="300" height="450" padding="0" className="m-2 transition-transform duration-300 hover:scale-150"/>
</div>
