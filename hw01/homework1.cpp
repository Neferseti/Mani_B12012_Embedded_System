#include<iostream>

using namespace std;

int main()
{
	int n;
	cout<<"N: ";
	cin>>n;
	char matrix[n][n];
	cout<<"\t";
	for(int i=0;i<n;i++)
		cout<<i<<"\t";
	cout<<endl;
	for(int i=0;i<n;i++)
	{
		cout<<i<<":\t";
		for(int j=0;j<n;j++)
		{
			matrix[i][j] = ' ';
			cout<<matrix[i][j]<<"\t";
		}
		cout<<endl;
	}
	int x = 0;
	int y = 0;
	while(true)
	{
		cout<<"--------------------------------------------------------------------------"<<endl;
		char enter;
		cout<<"Next move(press 2-down, 8-up, 4-left, 6-right, 0-exit, any_other_number-clear(shake)): ";
		cin>>enter;
		cout<<"--------------------------------------------------------------------------"<<endl;
		if(enter=='0')
		{
			cout<<"Good Bye..."<<endl;
			break;
		}
		else
		{
			if(enter=='2')
			{
				matrix[y][x]='*';
				y = ((y+1)<n?(y+1):y);
				matrix[y][x]='0';
			}
			else if(enter=='8')
			{
				matrix[y][x]='*';
				y = ((y-1)>=0?(y-1):y);
				matrix[y][x]='0';
			}
			else if(enter=='4')
			{
				matrix[y][x]='*';
				x = ((x-1)>=0?(x-1):x);
				matrix[y][x]='0';
			}
			else if(enter=='6')
			{
				matrix[y][x]='*';
				x = ((x+1)<n?(x+1):x);
				matrix[y][x]='0';
			}
			else
			{
				x = 0;
				y = 0;
				for(int i=0;i<n;i++)
				{
					for(int j=0;j<n;j++)
					{
						matrix[i][j] = ' ';
					}
				}
			}
		}
		cout<<"\t";
		for(int i=0;i<n;i++)
			cout<<i<<"\t";
		cout<<endl;
		for(int i=0;i<n;i++)
		{
			cout<<i<<":\t";
			for(int j=0;j<n;j++)
			{
				cout<<matrix[i][j]<<"\t";
			}
			cout<<endl;
		}
	}
	
	return 0;
}
